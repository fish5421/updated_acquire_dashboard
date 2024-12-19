import React, { useState, useEffect, useCallback } from 'react';
import * as SliderPrimitive from "@radix-ui/react-slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatCurrency } from '@/lib/utils';

const RangeFilter = ({ label, min, max, value, onChange, presets }) => {
  const [error, setError] = useState('');
  const [selectedPreset, setSelectedPreset] = useState(null);
  // Local state for the slider
  const [localValue, setLocalValue] = useState(value);

  const isCurrencyField = label.toLowerCase().includes('revenue') ||
    label.toLowerCase().includes('profit') ||
    label.toLowerCase().includes('price');

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const validateValues = useCallback((newValue) => {
    const [newMin, newMax] = newValue;
    if (typeof newMin !== 'number' || typeof newMax !== 'number' || isNaN(newMin) || isNaN(newMax)) {
      setError('Please enter valid numeric values');
      return false;
    }

    if (newMin > newMax) {
      setError('Min value cannot be greater than max value');
      return false;
    } else if (newMin < min || newMax > max) {
      setError(`Values must be between ${formatCurrency(min)} and ${formatCurrency(max)}`);
      return false;
    } else {
      setError('');
      return true;
    }
  }, [min, max]);

  const handleInputChange = (index) => (e) => {
    const inputValue = e.target.value.trim() === '' ? '' : Number(e.target.value);
    const updatedValue = [...localValue];
    updatedValue[index] = inputValue;
    setLocalValue(updatedValue);
  };

  // On commit (pointer up), validate and call onChange
  const commitValues = useCallback(() => {
    if (validateValues(localValue)) {
      onChange(localValue);
    }
  }, [localValue, onChange, validateValues]);

  const handlePresetClick = (presetMin, presetMax, index) => {
    if (selectedPreset === index) {
      const reset = [min, max];
      if (validateValues(reset)) {
        onChange(reset);
        setLocalValue(reset);
      }
      setSelectedPreset(null);
    } else {
      const presetValues = [presetMin, presetMax];
      if (validateValues(presetValues)) {
        onChange(presetValues);
        setLocalValue(presetValues);
      }
      setSelectedPreset(index);
    }
  };

  const normalizeValue = (val) => {
    return ((val - min) / (max - min)) * 100;
  };

  const denormalizeValue = (val) => {
    return (val / 100) * (max - min) + min;
  };

  const handleSliderChange = (newValue) => {
    // Update local state as the user slides
    const denormalizedValue = newValue.map(v => denormalizeValue(v));
    setLocalValue(denormalizedValue);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-neutral-dark">{label}</span>
        <span className="text-sm text-neutral-light">
          {formatCurrency(localValue[0])} - {formatCurrency(localValue[1])}
        </span>
      </div>
      <SliderPrimitive.Root
        min={0}
        max={100}
        step={0.1}
        value={[normalizeValue(localValue[0]), normalizeValue(localValue[1])]}
        onValueChange={handleSliderChange}
        onValueCommit={commitValues}
        className="relative flex items-center w-full h-5 touch-none"
        aria-label={`${label} range`}
      >
        <SliderPrimitive.Track className="relative w-full h-2 grow rounded-full bg-tertiary/30">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block w-5 h-5 rounded-full bg-white border-2 border-primary focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
          aria-label={`${label} minimum value`}
        />
        <SliderPrimitive.Thumb
          className="block w-5 h-5 rounded-full bg-white border-2 border-primary focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
          aria-label={`${label} maximum value`}
        />
      </SliderPrimitive.Root>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          {isCurrencyField && <span className="text-neutral-dark">$</span>}
          <Input
            type="number"
            value={localValue[0]}
            onChange={handleInputChange(0)}
            onBlur={commitValues}
            className="w-24 border border-neutral-light"
            aria-label={`Minimum ${label}`}
          />
        </div>
        <span className="text-neutral-light">to</span>
        <div className="flex items-center space-x-1">
          {isCurrencyField && <span className="text-neutral-dark">$</span>}
          <Input
            type="number"
            value={localValue[1]}
            onChange={handleInputChange(1)}
            onBlur={commitValues}
            className="w-24 border border-neutral-light"
            aria-label={`Maximum ${label}`}
          />
        </div>
      </div>
      {error && <p className="text-red-600 text-sm" role="alert">{error}</p>}
      <div className="flex flex-wrap gap-2">
        {presets.map((preset, index) => (
          <Button
            key={index}
            size="sm"
            onClick={() => handlePresetClick(preset.min, preset.max, index)}
            className={`transition-colors ${selectedPreset === index
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-white text-neutral-dark border border-neutral-light hover:bg-tertiary/30"
            }`}
          >
            {preset.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RangeFilter;