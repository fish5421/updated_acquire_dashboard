import React, { useState, useEffect } from 'react';
import * as SliderPrimitive from "@radix-ui/react-slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatCurrency } from '@/lib/utils';

const RangeFilter = ({ label, min, max, value, onChange, presets }) => {
  const [error, setError] = useState('');
  const [selectedPreset, setSelectedPreset] = useState(null);

  const isCurrencyField = label.toLowerCase().includes('revenue') ||
    label.toLowerCase().includes('profit') ||
    label.toLowerCase().includes('price');

  if (min === undefined || max === undefined || !Array.isArray(value) || value.length !== 2) {
    console.error('Invalid props provided to RangeFilter:', { min, max, value });
    return null;
  }

  const handleInputChange = (index) => (e) => {
    const inputValue = e.target.value.trim() === '' ? '' : Number(e.target.value);
    const updatedValue = [...value];
    updatedValue[index] = inputValue;
    validateAndUpdate(updatedValue);
    setSelectedPreset(null);
  };

  const validateAndUpdate = (newValue) => {
    const [newMin, newMax] = newValue;
    if (typeof newMin !== 'number' || typeof newMax !== 'number' || isNaN(newMin) || isNaN(newMax)) {
      setError('Please enter valid numeric values');
      return;
    }

    if (newMin > newMax) {
      setError('Min value cannot be greater than max value');
    } else if (newMin < min || newMax > max) {
      setError(`Values must be between ${formatCurrency(min)} and ${formatCurrency(max)}`);
    } else {
      setError('');
      onChange(newValue);
    }
  };

  const handlePresetClick = (presetMin, presetMax, index) => {
    if (selectedPreset === index) {
      validateAndUpdate([min, max]);
      setSelectedPreset(null);
    } else {
      validateAndUpdate([presetMin, presetMax]);
      setSelectedPreset(index);
    }
  };

  const normalizeValue = (val) => {
    return ((val - min) / (max - min)) * 100;
  };

  const handleSliderChange = (newValue) => {
    const denormalizedValue = newValue.map((normalizedValue) => {
      return (normalizedValue / 100) * (max - min) + min;
    });
    validateAndUpdate(denormalizedValue);
    setSelectedPreset(null);
  };

  useEffect(() => {
    const matchingPresetIndex = presets.findIndex(
      preset => preset.min === value[0] && preset.max === value[1]
    );
    setSelectedPreset(matchingPresetIndex !== -1 ? matchingPresetIndex : null);
  }, [value, presets]);

  const CurrencyInput = ({ val, onChangeHandler, ariaLabel }) => (
    <div className="flex items-center space-x-1">
      {isCurrencyField && <span className="text-neutral-dark">$</span>}
      <Input
        type="number"
        value={val}
        onChange={onChangeHandler}
        className="w-24 border border-neutral-light"
        aria-label={ariaLabel}
      />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-neutral-dark">{label}</span>
        <span className="text-sm text-neutral-light">
          {formatCurrency(value[0])} - {formatCurrency(value[1])}
        </span>
      </div>
      <SliderPrimitive.Root
        min={0}
        max={100}
        step={0.1}
        value={[normalizeValue(value[0]), normalizeValue(value[1])]}
        onValueChange={handleSliderChange}
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
        <CurrencyInput
          val={value[0]}
          onChangeHandler={handleInputChange(0)}
          ariaLabel={`Minimum ${label}`}
        />
        <span className="text-neutral-light">to</span>
        <CurrencyInput
          val={value[1]}
          onChangeHandler={handleInputChange(1)}
          ariaLabel={`Maximum ${label}`}
        />
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