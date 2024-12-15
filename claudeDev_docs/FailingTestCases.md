# Failing Test Cases

## src/__tests__/UserWorkflow.test.jsx

### User Workflow Integration Complete user workflow: Upload file, navigate to dashboard, apply filters, and analyze data
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/UserWorkflow.test.jsx:46:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/UserWorkflow.test.jsx:37:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

## src/__tests__/CrossComponentDataFlow.test.jsx

### Cross-component Data Flow Data flows correctly between FileUpload, Dashboard, and child components
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/CrossComponentDataFlow.test.jsx:45:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/CrossComponentDataFlow.test.jsx:36:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

## src/components/Dashboard.test.jsx

### Dashboard Component displays empty state messages when no data is available
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  Found multiple elements with the text: No Data to Display[0m
[0m[0m
[0mHere are the matching elements:[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<h3[39m[0m
[0m  [33mclass[39m=[32m"text-xl font-semibold mb-2"[39m[0m
[0m[36m>[39m[0m
[0m  [0m[0mNo Data to Display[0m[0m[0m
[0m[36m</h3>[39m[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<h3[39m[0m
[0m  [33mclass[39m=[32m"text-xl font-semibold mb-2"[39m[0m
[0m[36m>[39m[0m
[0m  [0m[0mNo Data to Display[0m[0m[0m
[0m[36m</h3>[39m[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<h3[39m[0m
[0m  [33mclass[39m=[32m"text-xl font-semibold mb-2"[39m[0m
[0m[36m>[39m[0m
[0m  [0m[0mNo Data to Display[0m[0m[0m
[0m[36m</h3>[39m[0m
[0m[0m
[0m(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<body>[39m[0m
[0m  [36m<div>[39m[0m
[0m    [36m<div[39m[0m
[0m      [33mclass[39m=[32m"p-4 space-y-4"[39m[0m
[0m    [36m>[39m[0m
[0m      [36m<h1[39m[0m
[0m        [33mclass[39m=[32m"text-2xl font-bold mb-4"[39m[0m
[0m      [36m>[39m[0m
[0m        [0m[0mDashboard 2.0[0m[0m[0m
[0m      [36m</h1>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"[39m[0m
[0m        [33mstyle[39m=[32m"opacity: 0; will-change: transform;"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"bg-white p-8 rounded-lg max-w-2xl"[39m[0m
[0m          [33mstyle[39m=[32m"will-change: transform; transform: scale(0.8);"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<h2[39m[0m
[0m            [33mclass[39m=[32m"text-2xl font-bold mb-4"[39m[0m
[0m          [36m>[39m[0m
[0m            [0m[0mWelcome to Dashboard 2.0![0m[0m[0m
[0m          [36m</h2>[39m[0m
[0m          [36m<p[39m[0m
[0m            [33mclass[39m=[32m"mb-4"[39m[0m
[0m          [36m>[39m[0m
[0m            [0m[0mHere's a quick guide to get you started:[0m[0m[0m
[0m          [36m</p>[39m[0m
[0m          [36m<ul[39m[0m
[0m            [33mclass[39m=[32m"list-disc list-inside mb-4"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<li>[39m[0m
[0m              [0m[0mUse the filters at the top to refine your data[0m[0m[0m
[0m            [36m</li>[39m[0m
[0m            [36m<li>[39m[0m
[0m              [0m[0mCheck out the summary statistics for a quick overview[0m[0m[0m
[0m            [36m</li>[39m[0m
[0m            [36m<li>[39m[0m
[0m              [0m[0mExplore the charts to visualize trends[0m[0m[0m
[0m            [36m</li>[39m[0m
[0m            [36m<li>[39m[0m
[0m              [0m[0mView detailed startup information in the table below[0m[0m[0m
[0m            [36m</li>[39m[0m
[0m          [36m</ul>[39m[0m
[0m          [36m<button[39m[0m
[0m            [33mclass[39m=[32m"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"[39m[0m
[0m          [36m>[39m[0m
[0m            [0m[0mGet Started[0m[0m[0m
[0m          [36m</button>[39m[0m
[0m        [36m</div>[39m[0m
[0m      [36m</div>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 w-full"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"flex flex-col space-y-1.5 p-6"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<h3[39m[0m
[0m            [33mclass[39m=[32m"font-semibold leading-none tracking-tight flex justify-between items-center"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<span>[39m[0m
[0m              [0m[0mFilters[0m[0m[0m
[0m            [36m</span>[39m[0m
[0m          [36m</h3>[39m[0m
[0m        [36m</div>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"p-6 pt-0"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"space-y-8"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex flex-col items-center justify-center h-64"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<h3[39m[0m
[0m                [33mclass[39m=[32m"text-xl font-semibold mb-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mNo Data to Display[0m[0m[0m
[0m              [36m</h3>[39m[0m
[0m              [36m<p[39m[0m
[0m                [33mclass[39m=[32m"text-gray-600 mb-4"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mUpload data from the File Management page to see available filters.[0m[0m[0m
[0m              [36m</p>[39m[0m
[0m            [36m</div>[39m[0m
[0m          [36m</div>[39m[0m
[0m        [36m</div>[39m[0m
[0m      [36m</div>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"flex flex-col space-y-1.5 p-6"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<h3[39m[0m
[0m            [33mclass[39m=[32m"font-semibold leading-none tracking-tight"[39m[0m
[0m          [36m>[39m[0m
[0m            [0m[0mSummary Statistics[0m[0m[0m
[0m          [36m</h3>[39m[0m
[0m        [36m</div>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"p-6 pt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex flex-col items-center justify-center h-64 col-span-full"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<h3[39m[0m
[0m              [33mclass[39m=[32m"text-xl font-semibold mb-2"[39m[0m
[0m            [36m>[39m[0m
[0m              [0m[0mNo Data Available[0m[0m[0m
[0m            [36m</h3>[39m[0m
[0m            [36m<p[39m[0m
[0m              [33mclass[39m=[32m"text-gray-600 mb-4"[39m[0m
[0m            [36m>[39m[0m
[0m              [0m[0mUpload data from the File Management page to see summary statistics.[0m[0m[0m
[0m            [36m</p>[39m[0m
[0m          [36m</div>[39m[0m
[0m        [36m</div>[39m[0m
[0m      [36m</div>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"grid grid-cols-1 lg:grid-cols-2 gap-4"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex flex-col space-y-1.5 p-6"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<h3[39m[0m
[0m              [33mclass[39m=[32m"font-semibold leading-none tracking-tight"[39m[0m
[0m            [36m>[39m[0m
[0m              [0m[0mRevenue vs Price[0m[0m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"relative inline-block ml-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<svg[39m[0m
[0m                  [33mclass[39m=[32m"lucide lucide-circle-help w-4 h-4 text-gray-400 cursor-help"[39m[0m
[0m                  [33mfill[39m=[32m"none"[39m[0m
[0m                  [33mheight[39m=[32m"24"[39m[0m
[0m                  [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                  [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                  [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                  [33mstroke-width[39m=[32m"2"[39m[0m
[0m                  [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                  [33mwidth[39m=[32m"24"[39m[0m
[0m                  [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<circle[39m[0m
[0m                    [33mcx[39m=[32m"12"[39m[0m
[0m                    [33mcy[39m=[32m"12"[39m[0m
[0m                    [33mr[39m=[32m"10"[39m[0m
[0m                  [36m/>[39m[0m
[0m                  [36m<path[39m[0m
[0m                    [33md[39m=[32m"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"[39m[0m
[0m                  [36m/>[39m[0m
[0m                  [36m<path[39m[0m
[0m                    [33md[39m=[32m"M12 17h.01"[39m[0m
[0m                  [36m/>[39m[0m
[0m                [36m</svg>[39m[0m
[0m              [36m</div>[39m[0m
[0m            [36m</h3>[39m[0m
[0m          [36m</div>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"p-6 pt-0"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex flex-col items-center justify-center h-64"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<h3[39m[0m
[0m                [33mclass[39m=[32m"text-xl font-semibold mb-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mNo Data to Display[0m[0m[0m
[0m              [36m</h3>[39m[0m
[0m              [36m<p[39m[0m
[0m                [33mclass[39m=[32m"text-gray-600 mb-4"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mUpload data from the File Management page to see the Revenue vs Price chart.[0m[0m[0m
[0m              [36m</p>[39m[0m
[0m            [36m</div>[39m[0m
[0m          [36m</div>[39m[0m
[0m        [36m</div>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex flex-col space-y-1.5 p-6"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<h3[39m[0m
[0m              [33mclass[39m=[32m"font-semibold leading-none tracking-tight"[39m[0m
[0m            [36m>[39m[0m
[0m              [0m[0mProfit vs Price[0m[0m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"relative inline-block ml-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<svg[39m[0m
[0m                  [33mclass[39m=[32m"lucide lucide-circle-help w-4 h-4 text-gray-400 cursor-help"[39m[0m
[0m                  [33mfill[39m=[32m"none"[39m[0m
[0m                  [33mheight[39m=[32m"24"[39m[0m
[0m                  [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                  [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                  [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                  [33mstroke-width[39m=[32m"2"[39m[0m
[0m                  [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                  [33mwidth[39m=[32m"24"[39m[0m
[0m                  [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<circle[39m[0m
[0m                    [33mcx[39m=[32m"12"[39m[0m
[0m                    [33mcy[39m=[32m"12"[39m[0m
[0m                    [33mr[39m=[32m"10"[39m[0m
[0m                  [36m/>[39m[0m
[0m                  [36m<path[39m[0m
[0m                    [33md[39m=[32m"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"[39m[0m
[0m                  [36m/>[39m[0m
[0m                  [36m<path[39m[0m
[0m                    [33md[39m=[32m"M12 17h.01"[39m[0m
[0m                  [36m/>[39m[0m
[0m                [36m</svg>[39m[0m
[0m              [36m</div>[39m[0m
[0m            [36m</h3>[39m[0m
[0m          [36m</div>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"p-6 pt-0"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex flex-col items-center justify-center h-64"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<h3[39m[0m
[0m                [33mclass[39m=[32m"text-xl font-semibold mb-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mNo Data to Display[0m[0m[0m
[0m              [36m</h3>[39m[0m
[0m              [36m<p[39m[0m
[0m                [33mclass[39m=[32m"text-gray-600 mb-4"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mUpload data from the File Management page to see the Profit vs Price chart.[0m[0m[0m
[0m              [36m</p>[39m[0m
[0m            [36m</div>[39m[0m
[0m          [36m</div>[39m[0m
[0m        [36m</div>[39m[0m
[0m      [36m</div>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"flex flex-col space-y-1.5 p-6"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<h3[39m[0m
[0m            [33mclass[39m=[32m"font-semibold leading-none tracking-tight"[39m[0m
[0m          [36m>[39m[0m
[0m            [0m[0mStartup Details[0m[0m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"relative inline-block ml-2"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<svg[39m[0m
[0m                [33mclass[39m=[32m"lucide lucide-circle-help w-4 h-4 text-gray-400 cursor-help"[39m[0m
[0m                [33mfill[39m=[32m"none"[39m[0m
[0m                [33mheight[39m=[32m"24"[39m[0m
[0m                [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                [33mstroke-width[39m=[32m"2"[39m[0m
[0m                [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                [33mwidth[39m=[32m"24"[39m[0m
[0m                [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<circle[39m[0m
[0m                  [33mcx[39m=[32m"12"[39m[0m
[0m                  [33mcy[39m=[32m"12"[39m[0m
[0m                  [33mr[39m=[32m"10"[39m[0m
[0m                [36m/>[39m[0m
[0m                [36m<path[39m[0m
[0m                  [33md[39m=[32m"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"[39m[0m
[0m                [36m/>[39m[0m
[0m                [36m<path[39m[0m
[0m                  [33md[39m=[32m"M12 17h.01"[39m[0m
[0m                [36m/>[39m[0m
[0m              [36m</svg>[39m[0m
[0m            [36m</div>[39m[0m
[0m          [36m</h3>[39m[0m
[0m        [36m</div>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"p-6 pt-0"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex flex-col items-center justify-center h-64"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<h3[39m[0m
[0m              [33mclass[39m=[32m"text-xl font-semibold mb-2"[39m[0m
[0m            [36m>[39m[0m
[0m              [0m[0mNo Startup Data Available[0m[0m[0m
[0m            [36m</h3>[39m[0m
[0m            [36m<p[39m[0m
[0m              [33mclass[39m=[32m"text-gray-600 mb-4"[39m[0m
[0m            [36m>[39m[0m
[0m              [0m[0mUpload data from the File Management page to see detailed startup information.[0m[0m[0m
[0m            [36m</p>[39m[0m
[0m          [36m</div>[39m[0m
[0m        [36m</div>[39m[0m
[0m      [36m</div>[39m[0m
[0m    [36m</div>[39m[0m
[0m  [36m</div>[39m[0m
[0m[36m</body>[39m[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at Object.getElementError (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
    at getElementError (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:20:35)
    at getMultipleElementsFoundError (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:23:10)
    at eval (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:55:13)
    at eval (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
    at Object.getByText (/home/project/src/components/Dashboard.test.jsx:28:19)
    at Promise.then.completed (/home/project/node_modules/jest-circus/build/utils.js:298:28)
    at https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21501
    at new Promise (<anonymous>)
    at new Promise (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21472)
    at callAsyncCircusFn (/home/project/node_modules/jest-circus/build/utils.js:231:10)
    at _callCircusTest (/home/project/node_modules/jest-circus/build/run.js:316:40)
    at _runTest (/home/project/node_modules/jest-circus/build/run.js:252:3)
    at _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:126:9)
    at _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:121:9)
    at run (/home/project/node_modules/jest-circus/build/run.js:71:3)
    at runAndTransformResultsToJestFormat (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

## src/components/RangeFilter.test.jsx

### RangeFilter renders correctly
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  (0 , _utils.cn) is not a function[0m

Difference:

[2mCompared values have no visual difference.[22mTypeError: 
    at eval (/home/project/src/components/ui/input.tsx:138:8)
    at renderWithHooks (/home/project/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
    at updateForwardRef (/home/project/node_modules/react-dom/cjs/react-dom.development.js:19245:20)
    at beginWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:21675:16)
    at beginWork$1 (/home/project/node_modules/react-dom/cjs/react-dom.development.js:27465:14)
    at performUnitOfWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
    at workLoopSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
    at renderRootSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
    at recoverFromConcurrentError (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
    at performConcurrentWorkOnRoot (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25789:22)
    at flushActQueue (/home/project/node_modules/react/cjs/react.development.js:2667:24)
    at act (/home/project/node_modules/react/cjs/react.development.js:2582:11)
    at eval (/home/project/node_modules/@testing-library/react/dist/act-compat.js:47:25)
    at renderRoot (/home/project/node_modules/@testing-library/react/dist/pure.js:180:26)
    at render (/home/project/node_modules/@testing-library/react/dist/pure.js:271:10)
    at Object.eval (/home/project/src/components/RangeFilter.test.jsx:39:24)
    at Promise.then.completed (/home/project/node_modules/jest-circus/build/utils.js:298:28)
    at <anonymous> (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21501)
    at new Promise (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21472)
    at callAsyncCircusFn (/home/project/node_modules/jest-circus/build/utils.js:231:10)
    at _callCircusTest (/home/project/node_modules/jest-circus/build/run.js:316:40)
    at async _runTest (/home/project/node_modules/jest-circus/build/run.js:252:3)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:126:9)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:121:9)
    at async run (/home/project/node_modules/jest-circus/build/run.js:71:3)
    at async runAndTransformResultsToJestFormat (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
    at async jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
    at async runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at async runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at async Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### RangeFilter updates minimum value
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  (0 , _utils.cn) is not a function[0m

Difference:

[2mCompared values have no visual difference.[22mTypeError: 
    at eval (/home/project/src/components/ui/input.tsx:138:8)
    at renderWithHooks (/home/project/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
    at updateForwardRef (/home/project/node_modules/react-dom/cjs/react-dom.development.js:19245:20)
    at beginWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:21675:16)
    at beginWork$1 (/home/project/node_modules/react-dom/cjs/react-dom.development.js:27465:14)
    at performUnitOfWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
    at workLoopSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
    at renderRootSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
    at recoverFromConcurrentError (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
    at performConcurrentWorkOnRoot (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25789:22)
    at flushActQueue (/home/project/node_modules/react/cjs/react.development.js:2667:24)
    at act (/home/project/node_modules/react/cjs/react.development.js:2582:11)
    at eval (/home/project/node_modules/@testing-library/react/dist/act-compat.js:47:25)
    at renderRoot (/home/project/node_modules/@testing-library/react/dist/pure.js:180:26)
    at render (/home/project/node_modules/@testing-library/react/dist/pure.js:271:10)
    at Object.eval (/home/project/src/components/RangeFilter.test.jsx:52:24)
    at Promise.then.completed (/home/project/node_modules/jest-circus/build/utils.js:298:28)
    at <anonymous> (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21501)
    at new Promise (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21472)
    at callAsyncCircusFn (/home/project/node_modules/jest-circus/build/utils.js:231:10)
    at _callCircusTest (/home/project/node_modules/jest-circus/build/run.js:316:40)
    at async _runTest (/home/project/node_modules/jest-circus/build/run.js:252:3)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:126:9)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:121:9)
    at async run (/home/project/node_modules/jest-circus/build/run.js:71:3)
    at async runAndTransformResultsToJestFormat (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
    at async jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
    at async runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at async runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at async Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### RangeFilter updates maximum value
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  (0 , _utils.cn) is not a function[0m

Difference:

[2mCompared values have no visual difference.[22mTypeError: 
    at eval (/home/project/src/components/ui/input.tsx:138:8)
    at renderWithHooks (/home/project/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
    at updateForwardRef (/home/project/node_modules/react-dom/cjs/react-dom.development.js:19245:20)
    at beginWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:21675:16)
    at beginWork$1 (/home/project/node_modules/react-dom/cjs/react-dom.development.js:27465:14)
    at performUnitOfWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
    at workLoopSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
    at renderRootSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
    at recoverFromConcurrentError (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
    at performConcurrentWorkOnRoot (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25789:22)
    at flushActQueue (/home/project/node_modules/react/cjs/react.development.js:2667:24)
    at act (/home/project/node_modules/react/cjs/react.development.js:2582:11)
    at eval (/home/project/node_modules/@testing-library/react/dist/act-compat.js:47:25)
    at renderRoot (/home/project/node_modules/@testing-library/react/dist/pure.js:180:26)
    at render (/home/project/node_modules/@testing-library/react/dist/pure.js:271:10)
    at Object.eval (/home/project/src/components/RangeFilter.test.jsx:68:24)
    at Promise.then.completed (/home/project/node_modules/jest-circus/build/utils.js:298:28)
    at <anonymous> (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21501)
    at new Promise (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21472)
    at callAsyncCircusFn (/home/project/node_modules/jest-circus/build/utils.js:231:10)
    at _callCircusTest (/home/project/node_modules/jest-circus/build/run.js:316:40)
    at async _runTest (/home/project/node_modules/jest-circus/build/run.js:252:3)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:126:9)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:121:9)
    at async run (/home/project/node_modules/jest-circus/build/run.js:71:3)
    at async runAndTransformResultsToJestFormat (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
    at async jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
    at async runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at async runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at async Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### RangeFilter shows error message for invalid range
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  (0 , _utils.cn) is not a function[0m

Difference:

[2mCompared values have no visual difference.[22mTypeError: 
    at eval (/home/project/src/components/ui/input.tsx:138:8)
    at renderWithHooks (/home/project/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
    at updateForwardRef (/home/project/node_modules/react-dom/cjs/react-dom.development.js:19245:20)
    at beginWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:21675:16)
    at beginWork$1 (/home/project/node_modules/react-dom/cjs/react-dom.development.js:27465:14)
    at performUnitOfWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
    at workLoopSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
    at renderRootSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
    at recoverFromConcurrentError (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
    at performConcurrentWorkOnRoot (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25789:22)
    at flushActQueue (/home/project/node_modules/react/cjs/react.development.js:2667:24)
    at act (/home/project/node_modules/react/cjs/react.development.js:2582:11)
    at eval (/home/project/node_modules/@testing-library/react/dist/act-compat.js:47:25)
    at renderRoot (/home/project/node_modules/@testing-library/react/dist/pure.js:180:26)
    at render (/home/project/node_modules/@testing-library/react/dist/pure.js:271:10)
    at Object.eval (/home/project/src/components/RangeFilter.test.jsx:84:24)
    at Promise.then.completed (/home/project/node_modules/jest-circus/build/utils.js:298:28)
    at <anonymous> (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21501)
    at new Promise (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21472)
    at callAsyncCircusFn (/home/project/node_modules/jest-circus/build/utils.js:231:10)
    at _callCircusTest (/home/project/node_modules/jest-circus/build/run.js:316:40)
    at async _runTest (/home/project/node_modules/jest-circus/build/run.js:252:3)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:126:9)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:121:9)
    at async run (/home/project/node_modules/jest-circus/build/run.js:71:3)
    at async runAndTransformResultsToJestFormat (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
    at async jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
    at async runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at async runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at async Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### RangeFilter sets values using presets
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  (0 , _utils.cn) is not a function[0m

Difference:

[2mCompared values have no visual difference.[22mTypeError: 
    at eval (/home/project/src/components/ui/input.tsx:138:8)
    at renderWithHooks (/home/project/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
    at updateForwardRef (/home/project/node_modules/react-dom/cjs/react-dom.development.js:19245:20)
    at beginWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:21675:16)
    at beginWork$1 (/home/project/node_modules/react-dom/cjs/react-dom.development.js:27465:14)
    at performUnitOfWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
    at workLoopSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
    at renderRootSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
    at recoverFromConcurrentError (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
    at performConcurrentWorkOnRoot (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25789:22)
    at flushActQueue (/home/project/node_modules/react/cjs/react.development.js:2667:24)
    at act (/home/project/node_modules/react/cjs/react.development.js:2582:11)
    at eval (/home/project/node_modules/@testing-library/react/dist/act-compat.js:47:25)
    at renderRoot (/home/project/node_modules/@testing-library/react/dist/pure.js:180:26)
    at render (/home/project/node_modules/@testing-library/react/dist/pure.js:271:10)
    at Object.eval (/home/project/src/components/RangeFilter.test.jsx:95:24)
    at Promise.then.completed (/home/project/node_modules/jest-circus/build/utils.js:298:28)
    at <anonymous> (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21501)
    at new Promise (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21472)
    at callAsyncCircusFn (/home/project/node_modules/jest-circus/build/utils.js:231:10)
    at _callCircusTest (/home/project/node_modules/jest-circus/build/run.js:316:40)
    at async _runTest (/home/project/node_modules/jest-circus/build/run.js:252:3)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:126:9)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:121:9)
    at async run (/home/project/node_modules/jest-circus/build/run.js:71:3)
    at async runAndTransformResultsToJestFormat (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
    at async jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
    at async runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at async runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at async Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### RangeFilter validates slider changes
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  (0 , _utils.cn) is not a function[0m

Difference:

[2mCompared values have no visual difference.[22mTypeError: 
    at eval (/home/project/src/components/ui/input.tsx:138:8)
    at renderWithHooks (/home/project/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
    at updateForwardRef (/home/project/node_modules/react-dom/cjs/react-dom.development.js:19245:20)
    at beginWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:21675:16)
    at beginWork$1 (/home/project/node_modules/react-dom/cjs/react-dom.development.js:27465:14)
    at performUnitOfWork (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26599:12)
    at workLoopSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26505:5)
    at renderRootSync (/home/project/node_modules/react-dom/cjs/react-dom.development.js:26473:7)
    at recoverFromConcurrentError (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25889:20)
    at performConcurrentWorkOnRoot (/home/project/node_modules/react-dom/cjs/react-dom.development.js:25789:22)
    at flushActQueue (/home/project/node_modules/react/cjs/react.development.js:2667:24)
    at act (/home/project/node_modules/react/cjs/react.development.js:2582:11)
    at eval (/home/project/node_modules/@testing-library/react/dist/act-compat.js:47:25)
    at renderRoot (/home/project/node_modules/@testing-library/react/dist/pure.js:180:26)
    at render (/home/project/node_modules/@testing-library/react/dist/pure.js:271:10)
    at Object.eval (/home/project/src/components/RangeFilter.test.jsx:107:38)
    at Promise.then.completed (/home/project/node_modules/jest-circus/build/utils.js:298:28)
    at <anonymous> (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21501)
    at new Promise (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21472)
    at callAsyncCircusFn (/home/project/node_modules/jest-circus/build/utils.js:231:10)
    at _callCircusTest (/home/project/node_modules/jest-circus/build/run.js:316:40)
    at async _runTest (/home/project/node_modules/jest-circus/build/run.js:252:3)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:126:9)
    at async _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:121:9)
    at async run (/home/project/node_modules/jest-circus/build/run.js:71:3)
    at async runAndTransformResultsToJestFormat (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
    at async jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
    at async runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at async runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at async Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

## src/components/Filter.test.jsx

### Filter Component populates business types correctly from data
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  Unable to find an element with the text: all. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<body[39m[0m
[0m  [33mdata-scroll-locked[39m=[32m"1"[39m[0m
[0m  [33mstyle[39m=[32m"pointer-events: none;"[39m[0m
[0m[36m>[39m[0m
[0m  [36m<span[39m[0m
[0m    [33maria-hidden[39m=[32m"true"[39m[0m
[0m    [33mdata-aria-hidden[39m=[32m"true"[39m[0m
[0m    [33mdata-radix-focus-guard[39m=[32m""[39m[0m
[0m    [33mstyle[39m=[32m"outline: none; opacity: 0; position: fixed; pointer-events: none;"[39m[0m
[0m    [33mtabindex[39m=[32m"0"[39m[0m
[0m  [36m/>[39m[0m
[0m  [36m<div[39m[0m
[0m    [33maria-hidden[39m=[32m"true"[39m[0m
[0m    [33mdata-aria-hidden[39m=[32m"true"[39m[0m
[0m  [36m>[39m[0m
[0m    [36m<div[39m[0m
[0m      [33mclass[39m=[32m"rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 w-full"[39m[0m
[0m    [36m>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"flex flex-col space-y-1.5 p-6"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<h3[39m[0m
[0m          [33mclass[39m=[32m"font-semibold leading-none tracking-tight flex justify-between items-center"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<span>[39m[0m
[0m            [0m[0mFilters[0m[0m[0m
[0m          [36m</span>[39m[0m
[0m          [36m<button[39m[0m
[0m            [33mclass[39m=[32m"inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-8 rounded-md px-3 text-xs"[39m[0m
[0m          [36m>[39m[0m
[0m            [0m[0mReset All Filters[0m[0m[0m
[0m          [36m</button>[39m[0m
[0m        [36m</h3>[39m[0m
[0m      [36m</div>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"p-6 pt-0"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"space-y-8"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"grid grid-cols-1 lg:grid-cols-3 gap-8"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"space-y-2"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<h3[39m[0m
[0m                [33mclass[39m=[32m"text-sm font-medium text-gray-700 flex items-center"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<span[39m[0m
[0m                  [33mclass[39m=[32m"flex-grow"[39m[0m
[0m                [36m>[39m[0m
[0m                  [0m[0mRevenue[0m[0m[0m
[0m                [36m</span>[39m[0m
[0m                [36m<div[39m[0m
[0m                  [33mclass[39m=[32m"relative inline-block ml-2"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<svg[39m[0m
[0m                    [33mclass[39m=[32m"lucide lucide-circle-help w-4 h-4 text-gray-400 cursor-help"[39m[0m
[0m                    [33mfill[39m=[32m"none"[39m[0m
[0m                    [33mheight[39m=[32m"24"[39m[0m
[0m                    [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                    [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                    [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                    [33mstroke-width[39m=[32m"2"[39m[0m
[0m                    [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                    [33mwidth[39m=[32m"24"[39m[0m
[0m                    [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<circle[39m[0m
[0m                      [33mcx[39m=[32m"12"[39m[0m
[0m                      [33mcy[39m=[32m"12"[39m[0m
[0m                      [33mr[39m=[32m"10"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<path[39m[0m
[0m                      [33md[39m=[32m"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<path[39m[0m
[0m                      [33md[39m=[32m"M12 17h.01"[39m[0m
[0m                    [36m/>[39m[0m
[0m                  [36m</svg>[39m[0m
[0m                [36m</div>[39m[0m
[0m                [36m<div[39m[0m
[0m                  [33mclass[39m=[32m"ml-2 w-6 h-6 flex items-center justify-center"[39m[0m
[0m                [36m/>[39m[0m
[0m              [36m</h3>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"space-y-4"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<div[39m[0m
[0m                  [33mclass[39m=[32m"flex justify-between items-center"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<span[39m[0m
[0m                    [33mclass[39m=[32m"text-sm font-medium text-gray-700"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [0m[0mRevenue Range[0m[0m[0m
[0m                  [36m</span>[39m[0m
[0m                  [36m<span[39m[0m
[0m                    [33mclass[39m=[32m"text-sm text-gray-500"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [0m[0m$0.00[0m[0m[0m
[0m                    [0m[0m - [0m[0m[0m
[0m                    [0m[0m$10,000,000.00[0m[0m[0m
[0m                  [36m</span>[39m[0m
[0m                [36m</div>[39m[0m
[0m                [36m<span[39m[0m
[0m                  [33maria-disabled[39m=[32m"false"[39m[0m
[0m                  [33maria-label[39m=[32m"Revenue Range range"[39m[0m
[0m                  [33mclass[39m=[32m"relative flex items-center w-full h-5 touch-none"[39m[0m
[0m                  [33mdata-orientation[39m=[32m"horizontal"[39m[0m
[0m                  [33mdir[39m=[32m"ltr"[39m[0m
[0m                  [33mstyle[39m=[32m"--radix-slider-thumb-transform: translateX(-50%);"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<span[39m[0m
[0m                    [33mclass[39m=[32m"relative w-full h-2 grow rounded-full bg-gray-200"[39m[0m
[0m                    [33mdata-orientation[39m=[32m"horizontal"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<span[39m[0m
[0m                      [33mclass[39m=[32m"absolute h-full rounded-full bg-blue-500"[39m[0m
[0m                      [33mdata-orientation[39m=[32m"horizontal"[39m[0m
[0m                      [33mstyle[39m=[32m"left: 0%; right: 0%;"[39m[0m
[0m                    [36m/>[39m[0m
[0m                  [36m</span>[39m[0m
[0m                  [36m<span[39m[0m
[0m                    [33mstyle[39m=[32m"transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(0% + 0px);"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<span[39m[0m
[0m                      [33maria-label[39m=[32m"Revenue Range minimum value"[39m[0m
[0m                      [33maria-orientation[39m=[32m"horizontal"[39m[0m
[0m                      [33maria-valuemax[39m=[32m"100"[39m[0m
[0m                      [33maria-valuemin[39m=[32m"0"[39m[0m
[0m                      [33maria-valuenow[39m=[32m"0"[39m[0m
[0m                      [33mclass[39m=[32m"block w-5 h-5 rounded-full bg-white border-2 border-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-300"[39m[0m
[0m                      [33mdata-orientation[39m=[32m"horizontal"[39m[0m
[0m                      [33mdata-radix-collection-item[39m=[32m""[39m[0m
[0m                      [33mrole[39m=[32m"slider"[39m[0m
[0m                      [33mstyle[39m=[32m""[39m[0m
[0m                      [33mtabindex[3...[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<html>[39m[0m
[0m  [36m<head />[39m[0m
[0m  [36m<body[39m[0m
[0m    [33mdata-scroll-locked[39m=[32m"1"[39m[0m
[0m    [33mstyle[39m=[32m"pointer-events: none;"[39m[0m
[0m  [36m>[39m[0m
[0m    [36m<span[39m[0m
[0m      [33maria-hidden[39m=[32m"true"[39m[0m
[0m      [33mdata-aria-hidden[39m=[32m"true"[39m[0m
[0m      [33mdata-radix-focus-guard[39m=[32m""[39m[0m
[0m      [33mstyle[39m=[32m"outline: none; opacity: 0; position: fixed; pointer-events: none;"[39m[0m
[0m      [33mtabindex[39m=[32m"0"[39m[0m
[0m    [36m/>[39m[0m
[0m    [36m<div[39m[0m
[0m      [33maria-hidden[39m=[32m"true"[39m[0m
[0m      [33mdata-aria-hidden[39m=[32m"true"[39m[0m
[0m    [36m>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 w-full"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"flex flex-col space-y-1.5 p-6"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<h3[39m[0m
[0m            [33mclass[39m=[32m"font-semibold leading-none tracking-tight flex justify-between items-center"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<span>[39m[0m
[0m              [0m[0mFilters[0m[0m[0m
[0m            [36m</span>[39m[0m
[0m            [36m<button[39m[0m
[0m              [33mclass[39m=[32m"inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-8 rounded-md px-3 text-xs"[39m[0m
[0m            [36m>[39m[0m
[0m              [0m[0mReset All Filters[0m[0m[0m
[0m            [36m</button>[39m[0m
[0m          [36m</h3>[39m[0m
[0m        [36m</div>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"p-6 pt-0"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"space-y-8"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"grid grid-cols-1 lg:grid-cols-3 gap-8"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"space-y-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<h3[39m[0m
[0m                  [33mclass[39m=[32m"text-sm font-medium text-gray-700 flex items-center"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<span[39m[0m
[0m                    [33mclass[39m=[32m"flex-grow"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [0m[0mRevenue[0m[0m[0m
[0m                  [36m</span>[39m[0m
[0m                  [36m<div[39m[0m
[0m                    [33mclass[39m=[32m"relative inline-block ml-2"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-circle-help w-4 h-4 text-gray-400 cursor-help"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<circle[39m[0m
[0m                        [33mcx[39m=[32m"12"[39m[0m
[0m                        [33mcy[39m=[32m"12"[39m[0m
[0m                        [33mr[39m=[32m"10"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M12 17h.01"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                  [36m</div>[39m[0m
[0m                  [36m<div[39m[0m
[0m                    [33mclass[39m=[32m"ml-2 w-6 h-6 flex items-center justify-center"[39m[0m
[0m                  [36m/>[39m[0m
[0m                [36m</h3>[39m[0m
[0m                [36m<div[39m[0m
[0m                  [33mclass[39m=[32m"space-y-4"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<div[39m[0m
[0m                    [33mclass[39m=[32m"flex justify-between items-center"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<span[39m[0m
[0m                      [33mclass[39m=[32m"text-sm font-medium text-gray-700"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [0m[0mRevenue Range[0m[0m[0m
[0m                    [36m</span>[39m[0m
[0m                    [36m<span[39m[0m
[0m                      [33mclass[39m=[32m"text-sm text-gray-500"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [0m[0m$0.00[0m[0m[0m
[0m                      [0m[0m - [0m[0m[0m
[0m                      [0m[0m$10,000,000.00[0m[0m[0m
[0m                    [36m</span>[39m[0m
[0m                  [36m</div>[39m[0m
[0m                  [36m<span[39m[0m
[0m                    [33maria-disabled[39m=[32m"false"[39m[0m
[0m                    [33maria-label[39m=[32m"Revenue Range range"[39m[0m
[0m                    [33mclass[39m=[32m"relative flex items-center w-full h-5 touch-none"[39m[0m
[0m                    [33mdata-orientation[39m=[32m"horizontal"[39m[0m
[0m                    [33mdir[39m=[32m"ltr"[39m[0m
[0m                    [33mstyle[39m=[32m"--radix-slider-thumb-transform: translateX(-50%);"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<span[39m[0m
[0m                      [33mclass[39m=[32m"relative w-full h-2 grow rounded-full bg-gray-200"[39m[0m
[0m                      [33mdata-orientation[39m=[32m"horizontal"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<span[39m[0m
[0m                        [33mclass[39m=[32m"absolute h-full rounded-full bg-blue-500"[39m[0m
[0m                        [33mdata-orientation[39m=[32m"horizontal"[39m[0m
[0m                        [33mstyle[39m=[32m"left: 0%; right: 0%;"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</span>[39m[0m
[0m                    [36m<span[39m[0m
[0m                      [33mstyle[39m=[32m"transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(0% + 0px);"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<span[39m[0m
[0m                        [33maria-label[39m=[32m"Revenue Range minimum value"[39m[0m
[0m                        [33maria-orientation[39m=[32m"horizontal"[39m[0m
[0m                        [33maria-valuemax[39m=[32m"100"[39m[0m
[0m                        [33maria-valuemin[39m=[32m"0"[39m[0m
[0m                        [33maria-valuenow[39m=[32m"0"[39m[0m
[0m                        [33mclass[39m=[32m"block w-5 h-5 rounded-full bg-white border-2 border-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-...[0m

Difference:

[2mCompared values have no visual difference.[22mError: Unable to find an element with the text: all. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
[36m<body[39m
  [33mdata-scroll-locked[39m=[32m"1"[39m
  [33mstyle[39m=[32m"pointer-events: none;"[39m
[36m>[39m
  [36m<span[39m
    [33maria-hidden[39m=[32m"true"[39m
    [33mdata-aria-hidden[39m=[32m"true"[39m
    [33mdata-radix-focus-guard[39m=[32m""[39m
    [33mstyle[39m=[32m"outline: none; opacity: 0; position: fixed; pointer-events: none;"[39m
    [33mtabindex[39m=[32m"0"[39m
  [36m/>[39m
  [36m<div[39m
    [33maria-hidden[39m=[32m"true"[39m
    [33mdata-aria-hidden[39m=[32m"true"[39m
  [36m>[39m
    [36m<div[39m
      [33mclass[39m=[32m"rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 w-full"[39m
    [36m>[39m
      [36m<div[39m
        [33mclass[39m=[32m"flex flex-col space-y-1.5 p-6"[39m
      [36m>[39m
        [36m<h3[39m
          [33mclass[39m=[32m"font-semibold leading-none tracking-tight flex justify-between items-center"[39m
        [36m>[39m
          [36m<span>[39m
            [0mFilters[0m
          [36m</span>[39m
          [36m<button[39m
            [33mclass[39m=[32m"inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-8 rounded-md px-3 text-xs"[39m
          [36m>[39m
            [0mReset All Filters[0m
          [36m</button>[39m
        [36m</h3>[39m
      [36m</div>[39m
      [36m<div[39m
        [33mclass[39m=[32m"p-6 pt-0"[39m
      [36m>[39m
        [36m<div[39m
          [33mclass[39m=[32m"space-y-8"[39m
        [36m>[39m
          [36m<div[39m
            [33mclass[39m=[32m"grid grid-cols-1 lg:grid-cols-3 gap-8"[39m
          [36m>[39m
            [36m<div[39m
              [33mclass[39m=[32m"space-y-2"[39m
            [36m>[39m
              [36m<h3[39m
                [33mclass[39m=[32m"text-sm font-medium text-gray-700 flex items-center"[39m
              [36m>[39m
                [36m<span[39m
                  [33mclass[39m=[32m"flex-grow"[39m
                [36m>[39m
                  [0mRevenue[0m
                [36m</span>[39m
                [36m<div[39m
                  [33mclass[39m=[32m"relative inline-block ml-2"[39m
                [36m>[39m
                  [36m<svg[39m
                    [33mclass[39m=[32m"lucide lucide-circle-help w-4 h-4 text-gray-400 cursor-help"[39m
                    [33mfill[39m=[32m"none"[39m
                    [33mheight[39m=[32m"24"[39m
                    [33mstroke[39m=[32m"currentColor"[39m
                    [33mstroke-linecap[39m=[32m"round"[39m
                    [33mstroke-linejoin[39m=[32m"round"[39m
                    [33mstroke-width[39m=[32m"2"[39m
                    [33mviewBox[39m=[32m"0 0 24 24"[39m
                    [33mwidth[39m=[32m"24"[39m
                    [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m
                  [36m>[39m
                    [36m<circle[39m
                      [33mcx[39m=[32m"12"[39m
                      [33mcy[39m=[32m"12"[39m
                      [33mr[39m=[32m"10"[39m
                    [36m/>[39m
                    [36m<path[39m
                      [33md[39m=[32m"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"[39m
                    [36m/>[39m
                    [36m<path[39m
                      [33md[39m=[32m"M12 17h.01"[39m
                    [36m/>[39m
                  [36m</svg>[39m
                [36m</div>[39m
                [36m<div[39m
                  [33mclass[39m=[32m"ml-2 w-6 h-6 flex items-center justify-center"[39m
                [36m/>[39m
              [36m</h3>[39m
              [36m<div[39m
                [33mclass[39m=[32m"space-y-4"[39m
              [36m>[39m
                [36m<div[39m
                  [33mclass[39m=[32m"flex justify-between items-center"[39m
                [36m>[39m
                  [36m<span[39m
                    [33mclass[39m=[32m"text-sm font-medium text-gray-700"[39m
                  [36m>[39m
                    [0mRevenue Range[0m
                  [36m</span>[39m
                  [36m<span[39m
                    [33mclass[39m=[32m"text-sm text-gray-500"[39m
                  [36m>[39m
                    [0m$0.00[0m
                    [0m - [0m
                    [0m$10,000,000.00[0m
                  [36m</span>[39m
                [36m</div>[39m
                [36m<span[39m
                  [33maria-disabled[39m=[32m"false"[39m
                  [33maria-label[39m=[32m"Revenue Range range"[39m
                  [33mclass[39m=[32m"relative flex items-center w-full h-5 touch-none"[39m
                  [33mdata-orientation[39m=[32m"horizontal"[39m
                  [33mdir[39m=[32m"ltr"[39m
                  [33mstyle[39m=[32m"--radix-slider-thumb-transform: translateX(-50%);"[39m
                [36m>[39m
                  [36m<span[39m
                    [33mclass[39m=[32m"relative w-full h-2 grow rounded-full bg-gray-200"[39m
                    [33mdata-orientation[39m=[32m"horizontal"[39m
                  [36m>[39m
                    [36m<span[39m
                      [33mclass[39m=[32m"absolute h-full rounded-full bg-blue-500"[39m
                      [33mdata-orientation[39m=[32m"horizontal"[39m
                      [33mstyle[39m=[32m"left: 0%; right: 0%;"[39m
                    [36m/>[39m
                  [36m</span>[39m
                  [36m<span[39m
                    [33mstyle[39m=[32m"transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(0% + 0px);"[39m
                  [36m>[39m
                    [36m<span[39m
                      [33maria-label[39m=[32m"Revenue Range minimum value"[39m
                      [33maria-orientation[39m=[32m"horizontal"[39m
                      [33maria-valuemax[39m=[32m"100"[39m
                      [33maria-valuemin[39m=[32m"0"[39m
                      [33maria-valuenow[39m=[32m"0"[39m
                      [33mclass[39m=[32m"block w-5 h-5 rounded-full bg-white border-2 border-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-300"[39m
                      [33mdata-orientation[39m=[32m"horizontal"[39m
                      [33mdata-radix-collection-item[39m=[32m""[39m
                      [33mrole[39m=[32m"slider"[39m
                      [33mstyle[39m=[32m""[39m
                      [33mtabindex[3...
    at waitForWrapper (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:163:27)
    at _callee$ (/home/project/src/components/Filter.test.jsx:48:18)
    at call (/home/project/src/components/Filter.test.jsx:2:1)
    at Generator.tryCatch (/home/project/src/components/Filter.test.jsx:2:1)
    at Generator._invoke [as next] (/home/project/src/components/Filter.test.jsx:2:1)
    at asyncGeneratorStep (/home/project/src/components/Filter.test.jsx:2:1)
    at asyncGeneratorStep (/home/project/src/components/Filter.test.jsx:2:1)
    at _next (/home/project/src/components/Filter.test.jsx:2:1)
    at https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21501
    at new Promise (<anonymous>)
    at new Promise (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21472)
    at Object.eval (/home/project/src/components/Filter.test.jsx:2:1)
    at Promise.then.completed (/home/project/node_modules/jest-circus/build/utils.js:298:28)
    at https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21501
    at new Promise (<anonymous>)
    at new Promise (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21472)
    at callAsyncCircusFn (/home/project/node_modules/jest-circus/build/utils.js:231:10)
    at _callCircusTest (/home/project/node_modules/jest-circus/build/run.js:316:40)
    at _runTest (/home/project/node_modules/jest-circus/build/run.js:252:3)
    at _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:126:9)
    at _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:121:9)
    at run (/home/project/node_modules/jest-circus/build/run.js:71:3)
    at runAndTransformResultsToJestFormat (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

## src/components/ErrorBoundary.test.jsx

### ErrorBoundary shows error details in development
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  Unable to find an element with the text: Test error. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<body>[39m[0m
[0m  [36m<div>[39m[0m
[0m    [36m<div[39m[0m
[0m      [33mclass[39m=[32m"p-4 bg-red-100 border border-red-400 text-red-700 rounded"[39m[0m
[0m    [36m>[39m[0m
[0m      [36m<h2[39m[0m
[0m        [33mclass[39m=[32m"text-lg font-semibold mb-2"[39m[0m
[0m      [36m>[39m[0m
[0m        [0m[0mSomething went wrong[0m[0m[0m
[0m      [36m</h2>[39m[0m
[0m      [36m<p[39m[0m
[0m        [33mclass[39m=[32m"mb-4"[39m[0m
[0m      [36m>[39m[0m
[0m        [0m[0mWe're sorry, but an error occurred. Please try refreshing the page or contact support if the problem persists.[0m[0m[0m
[0m      [36m</p>[39m[0m
[0m      [36m<details[39m[0m
[0m        [33mclass[39m=[32m"whitespace-pre-wrap"[39m[0m
[0m      [36m>[39m[0m
[0m        [0m[0mError: Test error[0m[0m[0m
[0m        [36m<br />[39m[0m
[0m        [0m[0m[0m
[0m    at ErrorThrowingComponent (/home/project/src/components/ErrorBoundary.test.jsx:24:9)[0m
[0m    at ErrorBoundary[0m[0m[0m
[0m      [36m</details>[39m[0m
[0m    [36m</div>[39m[0m
[0m  [36m</div>[39m[0m
[0m[36m</body>[39m[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at Object.getElementError (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:37:19)
    at eval (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:76:38)
    at eval (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:52:17)
    at eval (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:95:19)
    at Object.getByText (/home/project/src/components/ErrorBoundary.test.jsx:90:19)
    at Promise.then.completed (/home/project/node_modules/jest-circus/build/utils.js:298:28)
    at https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21501
    at new Promise (<anonymous>)
    at new Promise (https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:21472)
    at callAsyncCircusFn (/home/project/node_modules/jest-circus/build/utils.js:231:10)
    at _callCircusTest (/home/project/node_modules/jest-circus/build/run.js:316:40)
    at _runTest (/home/project/node_modules/jest-circus/build/run.js:252:3)
    at _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:126:9)
    at _runTestsForDescribeBlock (/home/project/node_modules/jest-circus/build/run.js:121:9)
    at run (/home/project/node_modules/jest-circus/build/run.js:71:3)
    at runAndTransformResultsToJestFormat (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

## src/__tests__/StatePersistence.test.jsx

### State Persistence Dashboard state persists when navigating away and back
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/StatePersistence.test.jsx:59:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/StatePersistence.test.jsx:50:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### State Persistence File upload state persists when navigating away and back
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/StatePersistence.test.jsx:111:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/StatePersistence.test.jsx:50:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

## src/__tests__/PerformanceTests.test.jsx

### Performance Tests Handling large dataset upload and processing
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  [2mexpect([22m[31mreceived[39m[2m).toBeInTheDocument()[22m[0m
[0m[0m
[0m[31mreceived[39m value must be an HTMLElement or an SVGElement.[0m
[0mReceived has value: [31mnull[39m[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<html>[39m[0m
[0m  [36m<head />[39m[0m
[0m  [36m<body>[39m[0m
[0m    [36m<div>[39m[0m
[0m      [36m<div>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"App"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex h-screen bg-white"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<span[39m[0m
[0m                  [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m[0m
[0m                [36m>[39m[0m
[0m                  [0m[0mMicro Startup Dashboard[0m[0m[0m
[0m                [36m</span>[39m[0m
[0m              [36m</div>[39m[0m
[0m              [36m<nav[39m[0m
[0m                [33mclass[39m=[32m"flex-1"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<ul[39m[0m
[0m                  [33mclass[39m=[32m"space-y-2 py-4"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<li>[39m[0m
[0m                    [36m<a[39m[0m
[0m                      [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m[0m
[0m                      [33mhref[39m=[32m"/"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<svg[39m[0m
[0m                        [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m[0m
[0m                        [33mfill[39m=[32m"none"[39m[0m
[0m                        [33mheight[39m=[32m"24"[39m[0m
[0m                        [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                        [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                        [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                        [33mstroke-width[39m=[32m"2"[39m[0m
[0m                        [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                        [33mwidth[39m=[32m"24"[39m[0m
[0m                        [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m[0m
[0m                        [36m/>[39m[0m
[0m                      [36m</svg>[39m[0m
[0m                      [0m[0mDashboard[0m[0m[0m
[0m                    [36m</a>[39m[0m
[0m                  [36m</li>[39m[0m
[0m                  [36m<li>[39m[0m
[0m                    [36m<a[39m[0m
[0m                      [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m[0m
[0m                      [33mhref[39m=[32m"/file-management"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<svg[39m[0m
[0m                        [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m[0m
[0m                        [33mfill[39m=[32m"none"[39m[0m
[0m                        [33mheight[39m=[32m"24"[39m[0m
[0m                        [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                        [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                        [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                        [33mstroke-width[39m=[32m"2"[39m[0m
[0m                        [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                        [33mwidth[39m=[32m"24"[39m[0m
[0m                        [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M10 9H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M16 13H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M16 17H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                      [36m</svg>[39m[0m
[0m                      [0m[0mFile Management[0m[0m[0m
[0m                    [36m</a>[39m[0m
[0m                  [36m</li>[39m[0m
[0m                [36m</ul>[39m[0m
[0m              [36m</nav>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"p-4 space-y-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<h3[39m[0m
[0m                  [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m[0m
[0m                [36m>[39m[0m
[0m                  [0m[0mQuick Actions[0m[0m[0m
[0m                [36m</h3>[39m[0m
[0m                [36m<div[39m[0m
[0m                  [33mtabindex[39m=[32m"0"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<button[39m[0m
[0m                    [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<polyline[39m[0m
[0m                        [33mpoints[39m=[32m"17 8 12 3 7 8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<line[39m[0m
[0m                        [33mx1[39m=[32m"12"[39m[0m
[0m                        [33mx2[39m=[32m"12"[39m[0m
[0m                        [33my1[39m=[32m"3"[39m[0m
[0m                        [33my2[39m=[32m"15"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mUpload File[0m[0m[0m
[0m                  [36m</button>[39m[0m
[0m                [36m</div>[39m[0m
[0m                [36m<div[39m[0m
[0m                  [33mtabindex[39m=[32m"0"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<button[39m[0m
[0m                    [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-chart-no-axes-column mr-2 h-4 w-4"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<line[39m[0m
[0m                        [33mx1[39m=[32m"18"[39m[0m
[0m                        [33mx2[39m=[32m"18"[39m[0m
[0m                        [33my1[39m=[32m"20"[39m[0m
[0m                        [33my2[39m=[32m"10"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<line[39m[0m
[0m                        [33mx1[39m=[32m"12"[39m[0m
[0m                        [33mx2[39m=[32m"12"[39m[0m
[0m                        [33my1[39m=[32m"20"[39m[0m
[0m                        [33my2[39m=[32m"4"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<line[39m[0m
[0m                        [33mx1[39m=[32m"6"[39m[0m
[0m                        [33mx2[39m=[32m"6"[39m[0m
[0m                        [33my1[39m=[32m"20"[39m[0m
[0m                        [33my2[39m=[32m"14"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mGenerate Report[0m[0m[0m
[0m                  [36m</button>[39m[0m
[0m                [36m</div>[39m[0m
[0m              [36m</div>[39m[0m
[0m            [36m</div>[39m[0m
[0m            [36m<main[39m[0m
[0m              [33mclass[39m=[32m"flex-1 overflow-x-hidden overflow-y-auto"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"p-4 space-y-4"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<h1[39m[0m
[0m                  [33mclass[39m=[32m"text-2xl font-bold mb-4"[39m[0m
[0m                [36m>[39m[0m
[0m                  [0m[0mFile Management[0m[0m[0m
[0m                [36m</h1>[39m[0m
[0m                [36m<div[39m[0m
[0m                  [33mclass[39m=[32m"rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<div[39m[0m
[0m                    [33mclass[39m=[32m"flex flex-col space-y-1.5 p-6"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<h3[39m[0m
[0m                      [33mclass[39m=[32m"font-semibold leading-none tracking-tight"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [0m[0mFiles and Assets[0m[0m[0m
[0m                    [36m</h3>[39m[0m
[0m                  [36m</div>[39m[0m
[0m                  [36m<div[39m[0m
[0m                    [33mclass[39m=[32m"p-6 pt-0"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<div[39m[0m
[0m                      [33mclass[39m=[32m"rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 p-6"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<h2[39m[0m
[0m                        [33mclass[39m=[32m"text-2xl font-bold mb-4"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [0m[0mFiles and assets[0m[0m[0m
[0m                      [36m</h2>[39m[0m
[0m                      [36m<p[39m[0m
[0m                        [33mclass[39m=[32m"mb-4"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [0m[0mDocuments and attachments that have been uploaded as part of this project.[0m[0m[0m
[0m                      [36m</p>[39m[0m
[0m                      [36m<div[39m[0m
[0m                        [33mclass[39m=[32m"border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [36m<input[39m[0m
[0m                          [33maccept[39m=[32m".csv"[39m[0m
[0m                          [33mclass[39m=[32m"hidden"[39m[0m
[0m                          [33mdata-testid[39m=[32m"file-input"[39m[0m
[0m                          [33mid[39m=[32m"fileInput"[39m[0m
[0m                          [33mmultiple[39m=[32m""[39m[0m
[0m                          [33mtype[39m=[32m"file"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<svg[39m[0m
[0m                          [33mclass[39m=[32m"mx-auto h-12 w-12 text-gray-400"[39m[0m
[0m                          [33mfill[39m=[32m"none"[39m[0m
[0m                          [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                          [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                        [36m>[39m[0m
[0m                          [36m<path[39m[0m
[0m                            [33md[39m=[32m"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"[39m[0m
[0m                            [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                            [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                            [33mstroke-width[39m=[32m"2"[39m[0m
[0m                          [36m/>[39m[0m
[0m                        [36m</svg>[39m[0m
[0m                        [36m<p[39m[0m
[0m                          [33mclass[39m=[32m"mt-1"[39m[0m
[0m                        [36m>[39m[0m
[0m                          [0m[0mClick to upload or drag and drop[0m[0m[0m
[0m                        [36m</p>[39m[0m
[0m                        [36m<p[39m[0m
[0m                          [33mclass[39m=[32m"text-xs text-gray-500"[39m[0m
[0m                        [36m>[39m[0m
[0m                          [0m[0mCSV files only, maximum file size 50 MB[0m[0m[0m
[0m                        [36m</p>[39m[0m
[0m                      [36m</div>[39m[0m
[0m                      [36m<div[39m[0m
[0m                        [33mclass[39m=[32m"mt-4"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [36m<h3[39m[0m
[0m                          [33mclass[39m=[32m"font-semibold mb-2"[39m[0m
[0m                        [36m>[39m[0m
[0m                          [0m[0mSelected files:[0m[0m[0m
[0m                        [36m</h3>[39m[0m
[0m                        [36m<ul[39m[0m
[0m                          [33mclass[39m=[32m"list-disc pl-5"[39m[0m
[0m                        [36m>[39m[0m
[0m                          [36m<li>[39m[0m
[0m                            [0m[0mlarge_dataset.csv[0m[0m[0m
[0m                          [36m</li>[39m[0m
[0m                        [36m</ul>[39m[0m
[0m                      [36m</div>[39m[0m
[0m                      [36m<button[39m[0m
[0m                        [33mclass[39m=[32m"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 mt-4"[39m[0m
[0m                        [33mdata-testid[39m=[32m"upload-button"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [0m[0mUpload File[0m[0m[0m
[0m                      [36m</button>[39m[0m
[0m                    [36m</div>[39m[0m
[0m                  [36m</div>[39m[0m
[0m                [36m</div>[39m[0m
[0m              [36m</div>[39m[0m
[0m            [36m</main>[39m[0m
[0m          [36m</div>[39m[0m
[0m        [36m</div>[39m[0m
[0m      [36m</div>[39m[0m
[0m    [36m</div>[39m[0m
[0m  [36m</body>[39m[0m
[0m[36m</html>[39m[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at __EXTERNAL_MATCHER_TRAP__ (/home/project/node_modules/expect/build/index.js:325:30)
    at Object.throwingMatcher [as toBeInTheDocument] (/home/project/node_modules/expect/build/index.js:326:15)
    at toBeInTheDocument (/home/project/src/__tests__/PerformanceTests.test.jsx:68:51)
    at runWithExpensiveErrorDiagnosticsDisabled (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:47:12)
    at checkCallback (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:124:77)
    at Proxy.checkRealTimersCallback (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:118:16)
    at Timeout.task [as _onTimeout] (/home/project/node_modules/jsdom/lib/jsdom/browser/Window.js:520:19)
    at node:internal/timers:246:4692
```

## src/__tests__/FileUploadFilterIntegration.test.jsx

### File Upload and Filter Integration Uploading a valid file updates the Dashboard components
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:65:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:56:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### File Upload and Filter Integration Applying and clearing filters updates the StartupDetailsTable
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  Unable to find a label with the text of: Business Type[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<body>[39m[0m
[0m  [36m<div>[39m[0m
[0m    [36m<div>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"App"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"flex h-screen bg-white"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<span[39m[0m
[0m                [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mMicro Startup Dashboard[0m[0m[0m
[0m              [36m</span>[39m[0m
[0m            [36m</div>[39m[0m
[0m            [36m<nav[39m[0m
[0m              [33mclass[39m=[32m"flex-1"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<ul[39m[0m
[0m                [33mclass[39m=[32m"space-y-2 py-4"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<li>[39m[0m
[0m                  [36m<a[39m[0m
[0m                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m[0m
[0m                    [33mhref[39m=[32m"/"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mDashboard[0m[0m[0m
[0m                  [36m</a>[39m[0m
[0m                [36m</li>[39m[0m
[0m                [36m<li>[39m[0m
[0m                  [36m<a[39m[0m
[0m                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m[0m
[0m                    [33mhref[39m=[32m"/file-management"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M10 9H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M16 13H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M16 17H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mFile Management[0m[0m[0m
[0m                  [36m</a>[39m[0m
[0m                [36m</li>[39m[0m
[0m              [36m</ul>[39m[0m
[0m            [36m</nav>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"p-4 space-y-2"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<h3[39m[0m
[0m                [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mQuick Actions[0m[0m[0m
[0m              [36m</h3>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mtabindex[39m=[32m"0"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<button[39m[0m
[0m                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<svg[39m[0m
[0m                    [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m[0m
[0m                    [33mfill[39m=[32m"none"[39m[0m
[0m                    [33mheight[39m=[32m"24"[39m[0m
[0m                    [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                    [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                    [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                    [33mstroke-width[39m=[32m"2"[39m[0m
[0m                    [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                    [33mwidth[39m=[32m"24"[39m[0m
[0m                    [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<path[39m[0m
[0m                      [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<polyline[39m[0m
[0m                      [33mpoints[39m=[32m"17 8 12 3 7 8"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<line[39m[0m
[0m                      [33mx1[39m=[32m"12"[39m[0m
[0m                      [33mx2[39m=[32m"12"[39m[0m
[0m                      [33my1[39m=[32m"3"[39m[0m
[0m                      [33my2[39m=[32m"15"[39m[0m
[0m                    [36m/>[39m[0m
[0m                  [36m</svg>[39m[0m
[0m                  [0m[0mUpload File[0m[0m[0m
[0m                [36m</button>[39m[0m
[0m              [36m</div>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mtabindex[39m=[32m"0"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<button[39m[0m
[0m                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors...[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<body>[39m[0m
[0m  [36m<div>[39m[0m
[0m    [36m<div>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"App"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"flex h-screen bg-white"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<span[39m[0m
[0m                [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mMicro Startup Dashboard[0m[0m[0m
[0m              [36m</span>[39m[0m
[0m            [36m</div>[39m[0m
[0m            [36m<nav[39m[0m
[0m              [33mclass[39m=[32m"flex-1"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<ul[39m[0m
[0m                [33mclass[39m=[32m"space-y-2 py-4"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<li>[39m[0m
[0m                  [36m<a[39m[0m
[0m                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m[0m
[0m                    [33mhref[39m=[32m"/"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mDashboard[0m[0m[0m
[0m                  [36m</a>[39m[0m
[0m                [36m</li>[39m[0m
[0m                [36m<li>[39m[0m
[0m                  [36m<a[39m[0m
[0m                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m[0m
[0m                    [33mhref[39m=[32m"/file-management"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M10 9H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M16 13H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M16 17H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mFile Management[0m[0m[0m
[0m                  [36m</a>[39m[0m
[0m                [36m</li>[39m[0m
[0m              [36m</ul>[39m[0m
[0m            [36m</nav>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"p-4 space-y-2"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<h3[39m[0m
[0m                [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mQuick Actions[0m[0m[0m
[0m              [36m</h3>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mtabindex[39m=[32m"0"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<button[39m[0m
[0m                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<svg[39m[0m
[0m                    [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m[0m
[0m                    [33mfill[39m=[32m"none"[39m[0m
[0m                    [33mheight[39m=[32m"24"[39m[0m
[0m                    [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                    [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                    [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                    [33mstroke-width[39m=[32m"2"[39m[0m
[0m                    [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                    [33mwidth[39m=[32m"24"[39m[0m
[0m                    [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<path[39m[0m
[0m                      [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<polyline[39m[0m
[0m                      [33mpoints[39m=[32m"17 8 12 3 7 8"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<line[39m[0m
[0m                      [33mx1[39m=[32m"12"[39m[0m
[0m                      [33mx2[39m=[32m"12"[39m[0m
[0m                      [33my1[39m=[32m"3"[39m[0m
[0m                      [33my2[39m=[32m"15"[39m[0m
[0m                    [36m/>[39m[0m
[0m                  [36m</svg>[39m[0m
[0m                  [0m[0mUpload File[0m[0m[0m
[0m                [36m</button>[39m[0m
[0m              [36m</div>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mtabindex[39m=[32m"0"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<button[39m[0m
[0m                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors...[0m

Difference:

[2mCompared values have no visual difference.[22mError: Unable to find a label with the text of: Business Type

Ignored nodes: comments, script, style
[36m<body>[39m
  [36m<div>[39m
    [36m<div>[39m
      [36m<div[39m
        [33mclass[39m=[32m"App"[39m
      [36m>[39m
        [36m<div[39m
          [33mclass[39m=[32m"flex h-screen bg-white"[39m
        [36m>[39m
          [36m<div[39m
            [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m
          [36m>[39m
            [36m<div[39m
              [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m
            [36m>[39m
              [36m<span[39m
                [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m
              [36m>[39m
                [0mMicro Startup Dashboard[0m
              [36m</span>[39m
            [36m</div>[39m
            [36m<nav[39m
              [33mclass[39m=[32m"flex-1"[39m
            [36m>[39m
              [36m<ul[39m
                [33mclass[39m=[32m"space-y-2 py-4"[39m
              [36m>[39m
                [36m<li>[39m
                  [36m<a[39m
                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m
                    [33mhref[39m=[32m"/"[39m
                  [36m>[39m
                    [36m<svg[39m
                      [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m
                      [33mfill[39m=[32m"none"[39m
                      [33mheight[39m=[32m"24"[39m
                      [33mstroke[39m=[32m"currentColor"[39m
                      [33mstroke-linecap[39m=[32m"round"[39m
                      [33mstroke-linejoin[39m=[32m"round"[39m
                      [33mstroke-width[39m=[32m"2"[39m
                      [33mviewBox[39m=[32m"0 0 24 24"[39m
                      [33mwidth[39m=[32m"24"[39m
                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m
                    [36m>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m
                      [36m/>[39m
                    [36m</svg>[39m
                    [0mDashboard[0m
                  [36m</a>[39m
                [36m</li>[39m
                [36m<li>[39m
                  [36m<a[39m
                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m
                    [33mhref[39m=[32m"/file-management"[39m
                  [36m>[39m
                    [36m<svg[39m
                      [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m
                      [33mfill[39m=[32m"none"[39m
                      [33mheight[39m=[32m"24"[39m
                      [33mstroke[39m=[32m"currentColor"[39m
                      [33mstroke-linecap[39m=[32m"round"[39m
                      [33mstroke-linejoin[39m=[32m"round"[39m
                      [33mstroke-width[39m=[32m"2"[39m
                      [33mviewBox[39m=[32m"0 0 24 24"[39m
                      [33mwidth[39m=[32m"24"[39m
                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m
                    [36m>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M10 9H8"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M16 13H8"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M16 17H8"[39m
                      [36m/>[39m
                    [36m</svg>[39m
                    [0mFile Management[0m
                  [36m</a>[39m
                [36m</li>[39m
              [36m</ul>[39m
            [36m</nav>[39m
            [36m<div[39m
              [33mclass[39m=[32m"p-4 space-y-2"[39m
            [36m>[39m
              [36m<h3[39m
                [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m
              [36m>[39m
                [0mQuick Actions[0m
              [36m</h3>[39m
              [36m<div[39m
                [33mtabindex[39m=[32m"0"[39m
              [36m>[39m
                [36m<button[39m
                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m
                [36m>[39m
                  [36m<svg[39m
                    [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m
                    [33mfill[39m=[32m"none"[39m
                    [33mheight[39m=[32m"24"[39m
                    [33mstroke[39m=[32m"currentColor"[39m
                    [33mstroke-linecap[39m=[32m"round"[39m
                    [33mstroke-linejoin[39m=[32m"round"[39m
                    [33mstroke-width[39m=[32m"2"[39m
                    [33mviewBox[39m=[32m"0 0 24 24"[39m
                    [33mwidth[39m=[32m"24"[39m
                    [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m
                  [36m>[39m
                    [36m<path[39m
                      [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m
                    [36m/>[39m
                    [36m<polyline[39m
                      [33mpoints[39m=[32m"17 8 12 3 7 8"[39m
                    [36m/>[39m
                    [36m<line[39m
                      [33mx1[39m=[32m"12"[39m
                      [33mx2[39m=[32m"12"[39m
                      [33my1[39m=[32m"3"[39m
                      [33my2[39m=[32m"15"[39m
                    [36m/>[39m
                  [36m</svg>[39m
                  [0mUpload File[0m
                [36m</button>[39m
              [36m</div>[39m
              [36m<div[39m
                [33mtabindex[39m=[32m"0"[39m
              [36m>[39m
                [36m<button[39m
                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors...
    at waitForWrapper (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:163:27)
    at eval (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:86:33)
    at findByLabelText (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:104:45)
    at call (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:2:1)
    at Generator.tryCatch (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:2:1)
    at Generator._invoke [as next] (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:2:1)
    at asyncGeneratorStep (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:2:1)
    at asyncGeneratorStep (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:2:1)
    at https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:22853
```

### File Upload and Filter Integration Uploading an invalid file shows an error message
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:128:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:56:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### File Upload and Filter Integration Uploading an empty file shows appropriate message
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:137:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:56:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### File Upload and Filter Integration Multiple range filters interact correctly
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  Unable to find a label with the text of: Min Revenue[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<body>[39m[0m
[0m  [36m<div>[39m[0m
[0m    [36m<div>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"App"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"flex h-screen bg-white"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<span[39m[0m
[0m                [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mMicro Startup Dashboard[0m[0m[0m
[0m              [36m</span>[39m[0m
[0m            [36m</div>[39m[0m
[0m            [36m<nav[39m[0m
[0m              [33mclass[39m=[32m"flex-1"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<ul[39m[0m
[0m                [33mclass[39m=[32m"space-y-2 py-4"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<li>[39m[0m
[0m                  [36m<a[39m[0m
[0m                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m[0m
[0m                    [33mhref[39m=[32m"/"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mDashboard[0m[0m[0m
[0m                  [36m</a>[39m[0m
[0m                [36m</li>[39m[0m
[0m                [36m<li>[39m[0m
[0m                  [36m<a[39m[0m
[0m                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m[0m
[0m                    [33mhref[39m=[32m"/file-management"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M10 9H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M16 13H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M16 17H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mFile Management[0m[0m[0m
[0m                  [36m</a>[39m[0m
[0m                [36m</li>[39m[0m
[0m              [36m</ul>[39m[0m
[0m            [36m</nav>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"p-4 space-y-2"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<h3[39m[0m
[0m                [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mQuick Actions[0m[0m[0m
[0m              [36m</h3>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mtabindex[39m=[32m"0"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<button[39m[0m
[0m                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<svg[39m[0m
[0m                    [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m[0m
[0m                    [33mfill[39m=[32m"none"[39m[0m
[0m                    [33mheight[39m=[32m"24"[39m[0m
[0m                    [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                    [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                    [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                    [33mstroke-width[39m=[32m"2"[39m[0m
[0m                    [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                    [33mwidth[39m=[32m"24"[39m[0m
[0m                    [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<path[39m[0m
[0m                      [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<polyline[39m[0m
[0m                      [33mpoints[39m=[32m"17 8 12 3 7 8"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<line[39m[0m
[0m                      [33mx1[39m=[32m"12"[39m[0m
[0m                      [33mx2[39m=[32m"12"[39m[0m
[0m                      [33my1[39m=[32m"3"[39m[0m
[0m                      [33my2[39m=[32m"15"[39m[0m
[0m                    [36m/>[39m[0m
[0m                  [36m</svg>[39m[0m
[0m                  [0m[0mUpload File[0m[0m[0m
[0m                [36m</button>[39m[0m
[0m              [36m</div>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mtabindex[39m=[32m"0"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<button[39m[0m
[0m                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors...[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<body>[39m[0m
[0m  [36m<div>[39m[0m
[0m    [36m<div>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"App"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"flex h-screen bg-white"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<span[39m[0m
[0m                [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mMicro Startup Dashboard[0m[0m[0m
[0m              [36m</span>[39m[0m
[0m            [36m</div>[39m[0m
[0m            [36m<nav[39m[0m
[0m              [33mclass[39m=[32m"flex-1"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<ul[39m[0m
[0m                [33mclass[39m=[32m"space-y-2 py-4"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<li>[39m[0m
[0m                  [36m<a[39m[0m
[0m                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m[0m
[0m                    [33mhref[39m=[32m"/"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mDashboard[0m[0m[0m
[0m                  [36m</a>[39m[0m
[0m                [36m</li>[39m[0m
[0m                [36m<li>[39m[0m
[0m                  [36m<a[39m[0m
[0m                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m[0m
[0m                    [33mhref[39m=[32m"/file-management"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M10 9H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M16 13H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M16 17H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mFile Management[0m[0m[0m
[0m                  [36m</a>[39m[0m
[0m                [36m</li>[39m[0m
[0m              [36m</ul>[39m[0m
[0m            [36m</nav>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"p-4 space-y-2"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<h3[39m[0m
[0m                [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mQuick Actions[0m[0m[0m
[0m              [36m</h3>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mtabindex[39m=[32m"0"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<button[39m[0m
[0m                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<svg[39m[0m
[0m                    [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m[0m
[0m                    [33mfill[39m=[32m"none"[39m[0m
[0m                    [33mheight[39m=[32m"24"[39m[0m
[0m                    [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                    [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                    [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                    [33mstroke-width[39m=[32m"2"[39m[0m
[0m                    [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                    [33mwidth[39m=[32m"24"[39m[0m
[0m                    [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<path[39m[0m
[0m                      [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<polyline[39m[0m
[0m                      [33mpoints[39m=[32m"17 8 12 3 7 8"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<line[39m[0m
[0m                      [33mx1[39m=[32m"12"[39m[0m
[0m                      [33mx2[39m=[32m"12"[39m[0m
[0m                      [33my1[39m=[32m"3"[39m[0m
[0m                      [33my2[39m=[32m"15"[39m[0m
[0m                    [36m/>[39m[0m
[0m                  [36m</svg>[39m[0m
[0m                  [0m[0mUpload File[0m[0m[0m
[0m                [36m</button>[39m[0m
[0m              [36m</div>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mtabindex[39m=[32m"0"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<button[39m[0m
[0m                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors...[0m

Difference:

[2mCompared values have no visual difference.[22mError: Unable to find a label with the text of: Min Revenue

Ignored nodes: comments, script, style
[36m<body>[39m
  [36m<div>[39m
    [36m<div>[39m
      [36m<div[39m
        [33mclass[39m=[32m"App"[39m
      [36m>[39m
        [36m<div[39m
          [33mclass[39m=[32m"flex h-screen bg-white"[39m
        [36m>[39m
          [36m<div[39m
            [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m
          [36m>[39m
            [36m<div[39m
              [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m
            [36m>[39m
              [36m<span[39m
                [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m
              [36m>[39m
                [0mMicro Startup Dashboard[0m
              [36m</span>[39m
            [36m</div>[39m
            [36m<nav[39m
              [33mclass[39m=[32m"flex-1"[39m
            [36m>[39m
              [36m<ul[39m
                [33mclass[39m=[32m"space-y-2 py-4"[39m
              [36m>[39m
                [36m<li>[39m
                  [36m<a[39m
                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m
                    [33mhref[39m=[32m"/"[39m
                  [36m>[39m
                    [36m<svg[39m
                      [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m
                      [33mfill[39m=[32m"none"[39m
                      [33mheight[39m=[32m"24"[39m
                      [33mstroke[39m=[32m"currentColor"[39m
                      [33mstroke-linecap[39m=[32m"round"[39m
                      [33mstroke-linejoin[39m=[32m"round"[39m
                      [33mstroke-width[39m=[32m"2"[39m
                      [33mviewBox[39m=[32m"0 0 24 24"[39m
                      [33mwidth[39m=[32m"24"[39m
                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m
                    [36m>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m
                      [36m/>[39m
                    [36m</svg>[39m
                    [0mDashboard[0m
                  [36m</a>[39m
                [36m</li>[39m
                [36m<li>[39m
                  [36m<a[39m
                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m
                    [33mhref[39m=[32m"/file-management"[39m
                  [36m>[39m
                    [36m<svg[39m
                      [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m
                      [33mfill[39m=[32m"none"[39m
                      [33mheight[39m=[32m"24"[39m
                      [33mstroke[39m=[32m"currentColor"[39m
                      [33mstroke-linecap[39m=[32m"round"[39m
                      [33mstroke-linejoin[39m=[32m"round"[39m
                      [33mstroke-width[39m=[32m"2"[39m
                      [33mviewBox[39m=[32m"0 0 24 24"[39m
                      [33mwidth[39m=[32m"24"[39m
                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m
                    [36m>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M10 9H8"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M16 13H8"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M16 17H8"[39m
                      [36m/>[39m
                    [36m</svg>[39m
                    [0mFile Management[0m
                  [36m</a>[39m
                [36m</li>[39m
              [36m</ul>[39m
            [36m</nav>[39m
            [36m<div[39m
              [33mclass[39m=[32m"p-4 space-y-2"[39m
            [36m>[39m
              [36m<h3[39m
                [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m
              [36m>[39m
                [0mQuick Actions[0m
              [36m</h3>[39m
              [36m<div[39m
                [33mtabindex[39m=[32m"0"[39m
              [36m>[39m
                [36m<button[39m
                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m
                [36m>[39m
                  [36m<svg[39m
                    [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m
                    [33mfill[39m=[32m"none"[39m
                    [33mheight[39m=[32m"24"[39m
                    [33mstroke[39m=[32m"currentColor"[39m
                    [33mstroke-linecap[39m=[32m"round"[39m
                    [33mstroke-linejoin[39m=[32m"round"[39m
                    [33mstroke-width[39m=[32m"2"[39m
                    [33mviewBox[39m=[32m"0 0 24 24"[39m
                    [33mwidth[39m=[32m"24"[39m
                    [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m
                  [36m>[39m
                    [36m<path[39m
                      [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m
                    [36m/>[39m
                    [36m<polyline[39m
                      [33mpoints[39m=[32m"17 8 12 3 7 8"[39m
                    [36m/>[39m
                    [36m<line[39m
                      [33mx1[39m=[32m"12"[39m
                      [33mx2[39m=[32m"12"[39m
                      [33my1[39m=[32m"3"[39m
                      [33my2[39m=[32m"15"[39m
                    [36m/>[39m
                  [36m</svg>[39m
                  [0mUpload File[0m
                [36m</button>[39m
              [36m</div>[39m
              [36m<div[39m
                [33mtabindex[39m=[32m"0"[39m
              [36m>[39m
                [36m<button[39m
                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors...
    at waitForWrapper (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:163:27)
    at eval (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/query-helpers.js:86:33)
    at findByLabelText (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:156:42)
    at call (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:2:1)
    at Generator.tryCatch (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:2:1)
    at Generator._invoke [as next] (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:2:1)
    at asyncGeneratorStep (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:2:1)
    at asyncGeneratorStep (/home/project/src/__tests__/FileUploadFilterIntegration.test.jsx:2:1)
    at https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:22853
```

## src/__tests__/EdgeCasesAndErrors.test.jsx

### Edge Cases and Error Handling Uploading an empty file shows appropriate message
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/EdgeCasesAndErrors.test.jsx:38:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/EdgeCasesAndErrors.test.jsx:29:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### Edge Cases and Error Handling Uploading an invalid file format shows error message
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/EdgeCasesAndErrors.test.jsx:63:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/EdgeCasesAndErrors.test.jsx:29:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### Edge Cases and Error Handling Applying filters with no matching results shows appropriate message
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/EdgeCasesAndErrors.test.jsx:88:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/EdgeCasesAndErrors.test.jsx:29:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

### Edge Cases and Error Handling Handling network error during file upload
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  thrown: "Exceeded timeout of 5000 ms for a test.[0m
[0mAdd a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at test (/home/project/src/__tests__/EdgeCasesAndErrors.test.jsx:138:3)
    at _dispatchDescribe (/home/project/node_modules/jest-circus/build/index.js:91:26)
    at Proxy.describe (/home/project/node_modules/jest-circus/build/index.js:55:5)
    at Object.describe (/home/project/src/__tests__/EdgeCasesAndErrors.test.jsx:29:1)
    at Runtime._execModule (/home/project/node_modules/jest-runtime/build/index.js:1439:24)
    at Runtime._loadModule (/home/project/node_modules/jest-runtime/build/index.js:1022:12)
    at Runtime.requireModule (/home/project/node_modules/jest-runtime/build/index.js:882:12)
    at jestAdapter (/home/project/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:77:13)
    at runTestInternal (/home/project/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (/home/project/node_modules/jest-runner/build/runTest.js:444:34)
    at Object.worker (/home/project/node_modules/jest-runner/build/testWorker.js:106:12)
```

## src/__tests__/ConcurrentActions.test.jsx

### Concurrent User Actions Handles rapid filter changes correctly
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  [2mexpect([22m[31mreceived[39m[2m).toBeInTheDocument()[22m[0m
[0m[0m
[0m[31mreceived[39m value must be an HTMLElement or an SVGElement.[0m
[0mReceived has value: [31mnull[39m[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<html>[39m[0m
[0m  [36m<head />[39m[0m
[0m  [36m<body>[39m[0m
[0m    [36m<div>[39m[0m
[0m      [36m<div>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"App"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex h-screen bg-white"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<span[39m[0m
[0m                  [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m[0m
[0m                [36m>[39m[0m
[0m                  [0m[0mMicro Startup Dashboard[0m[0m[0m
[0m                [36m</span>[39m[0m
[0m              [36m</div>[39m[0m
[0m              [36m<nav[39m[0m
[0m                [33mclass[39m=[32m"flex-1"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<ul[39m[0m
[0m                  [33mclass[39m=[32m"space-y-2 py-4"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<li>[39m[0m
[0m                    [36m<a[39m[0m
[0m                      [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m[0m
[0m                      [33mhref[39m=[32m"/"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<svg[39m[0m
[0m                        [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m[0m
[0m                        [33mfill[39m=[32m"none"[39m[0m
[0m                        [33mheight[39m=[32m"24"[39m[0m
[0m                        [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                        [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                        [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                        [33mstroke-width[39m=[32m"2"[39m[0m
[0m                        [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                        [33mwidth[39m=[32m"24"[39m[0m
[0m                        [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m[0m
[0m                        [36m/>[39m[0m
[0m                      [36m</svg>[39m[0m
[0m                      [0m[0mDashboard[0m[0m[0m
[0m                    [36m</a>[39m[0m
[0m                  [36m</li>[39m[0m
[0m                  [36m<li>[39m[0m
[0m                    [36m<a[39m[0m
[0m                      [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m[0m
[0m                      [33mhref[39m=[32m"/file-management"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<svg[39m[0m
[0m                        [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m[0m
[0m                        [33mfill[39m=[32m"none"[39m[0m
[0m                        [33mheight[39m=[32m"24"[39m[0m
[0m                        [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                        [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                        [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                        [33mstroke-width[39m=[32m"2"[39m[0m
[0m                        [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                        [33mwidth[39m=[32m"24"[39m[0m
[0m                        [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M10 9H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M16 13H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M16 17H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                      [36m</svg>[39m[0m
[0m                      [0m[0mFile Management[0m[0m[0m
[0m                    [36m</a>[39m[0m
[0m                  [36m</li>[39m[0m
[0m                [36m</ul>[39m[0m
[0m              [36m</nav>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"p-4 space-y-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<h3[39m[0m
[0m                  [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m[0m
[0m                [36m>[39m[0m
[0m                  [0m[0mQuick Actions[0m[0m[0m
[0m                [36m</h3>[39m[0m
[0m                [36m<div[39m[0m
[0m                  [33mtabindex[39m=[32m"0"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<button[39m[0m
[0m                    [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<polyline[39m[0m
[0m                        [33mpoints[39m=[32m"17 8 12 3 7 8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<line[39m[0m
[0m                        [33mx1[39m=[32m"12"[39m[0m
[0m                        [33mx2[39m=[32m"12"[39m[0m
[0m                        [33my1[39m=[32m"3"[39m[0m
[0m                        [33my2[39m=[32m"15"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mUpload File[0m[0m[0m
[0m         ...[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at __EXTERNAL_MATCHER_TRAP__ (/home/project/node_modules/expect/build/index.js:325:30)
    at Object.throwingMatcher [as toBeInTheDocument] (/home/project/node_modules/expect/build/index.js:326:15)
    at toBeInTheDocument (/home/project/src/__tests__/ConcurrentActions.test.jsx:62:51)
    at runWithExpensiveErrorDiagnosticsDisabled (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:47:12)
    at checkCallback (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:124:77)
    at Proxy.checkRealTimersCallback (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:118:16)
    at Timeout.task [as _onTimeout] (/home/project/node_modules/jsdom/lib/jsdom/browser/Window.js:520:19)
    at node:internal/timers:246:4692
```

### Concurrent User Actions Handles simultaneous file uploads correctly
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  [2mexpect([22m[31mreceived[39m[2m).toBeInTheDocument()[22m[0m
[0m[0m
[0m[31mreceived[39m value must be an HTMLElement or an SVGElement.[0m
[0mReceived has value: [31mnull[39m[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<html>[39m[0m
[0m  [36m<head />[39m[0m
[0m  [36m<body>[39m[0m
[0m    [36m<div>[39m[0m
[0m      [36m<div>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"App"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex h-screen bg-white"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<span[39m[0m
[0m                  [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m[0m
[0m                [36m>[39m[0m
[0m                  [0m[0mMicro Startup Dashboard[0m[0m[0m
[0m                [36m</span>[39m[0m
[0m              [36m</div>[39m[0m
[0m              [36m<nav[39m[0m
[0m                [33mclass[39m=[32m"flex-1"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<ul[39m[0m
[0m                  [33mclass[39m=[32m"space-y-2 py-4"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<li>[39m[0m
[0m                    [36m<a[39m[0m
[0m                      [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m[0m
[0m                      [33mhref[39m=[32m"/"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<svg[39m[0m
[0m                        [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m[0m
[0m                        [33mfill[39m=[32m"none"[39m[0m
[0m                        [33mheight[39m=[32m"24"[39m[0m
[0m                        [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                        [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                        [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                        [33mstroke-width[39m=[32m"2"[39m[0m
[0m                        [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                        [33mwidth[39m=[32m"24"[39m[0m
[0m                        [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m[0m
[0m                        [36m/>[39m[0m
[0m                      [36m</svg>[39m[0m
[0m                      [0m[0mDashboard[0m[0m[0m
[0m                    [36m</a>[39m[0m
[0m                  [36m</li>[39m[0m
[0m                  [36m<li>[39m[0m
[0m                    [36m<a[39m[0m
[0m                      [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m[0m
[0m                      [33mhref[39m=[32m"/file-management"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<svg[39m[0m
[0m                        [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m[0m
[0m                        [33mfill[39m=[32m"none"[39m[0m
[0m                        [33mheight[39m=[32m"24"[39m[0m
[0m                        [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                        [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                        [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                        [33mstroke-width[39m=[32m"2"[39m[0m
[0m                        [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                        [33mwidth[39m=[32m"24"[39m[0m
[0m                        [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M10 9H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M16 13H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M16 17H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                      [36m</svg>[39m[0m
[0m                      [0m[0mFile Management[0m[0m[0m
[0m                    [36m</a>[39m[0m
[0m                  [36m</li>[39m[0m
[0m                [36m</ul>[39m[0m
[0m              [36m</nav>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"p-4 space-y-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<h3[39m[0m
[0m                  [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m[0m
[0m                [36m>[39m[0m
[0m                  [0m[0mQuick Actions[0m[0m[0m
[0m                [36m</h3>[39m[0m
[0m                [36m<div[39m[0m
[0m                  [33mtabindex[39m=[32m"0"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<button[39m[0m
[0m                    [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<polyline[39m[0m
[0m                        [33mpoints[39m=[32m"17 8 12 3 7 8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<line[39m[0m
[0m                        [33mx1[39m=[32m"12"[39m[0m
[0m                        [33mx2[39m=[32m"12"[39m[0m
[0m                        [33my1[39m=[32m"3"[39m[0m
[0m                        [33my2[39m=[32m"15"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mUpload File[0m[0m[0m
[0m         ...[0m

Difference:

[2mCompared values have no visual difference.[22mError: 
    at __EXTERNAL_MATCHER_TRAP__ (/home/project/node_modules/expect/build/index.js:325:30)
    at Object.throwingMatcher [as toBeInTheDocument] (/home/project/node_modules/expect/build/index.js:326:15)
    at toBeInTheDocument (/home/project/src/__tests__/ConcurrentActions.test.jsx:121:51)
    at runWithExpensiveErrorDiagnosticsDisabled (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/config.js:47:12)
    at checkCallback (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:124:77)
    at Proxy.checkRealTimersCallback (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:118:16)
    at Timeout.task [as _onTimeout] (/home/project/node_modules/jsdom/lib/jsdom/browser/Window.js:520:19)
    at node:internal/timers:246:4692
```

### Concurrent User Actions Handles rapid navigation between components
```
[0mExpected value [0m  [32mundefined[39m
[0mReceived:[0m
[0m[0m  [31mundefined[39m[0m[0m
[0m[0m
[0mMessage:[0m
[0m  Unable to find an element with the text: /Avg Revenue/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<body>[39m[0m
[0m  [36m<div>[39m[0m
[0m    [36m<div>[39m[0m
[0m      [36m<div[39m[0m
[0m        [33mclass[39m=[32m"App"[39m[0m
[0m      [36m>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"flex h-screen bg-white"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<span[39m[0m
[0m                [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mMicro Startup Dashboard[0m[0m[0m
[0m              [36m</span>[39m[0m
[0m            [36m</div>[39m[0m
[0m            [36m<nav[39m[0m
[0m              [33mclass[39m=[32m"flex-1"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<ul[39m[0m
[0m                [33mclass[39m=[32m"space-y-2 py-4"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<li>[39m[0m
[0m                  [36m<a[39m[0m
[0m                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m[0m
[0m                    [33mhref[39m=[32m"/"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mDashboard[0m[0m[0m
[0m                  [36m</a>[39m[0m
[0m                [36m</li>[39m[0m
[0m                [36m<li>[39m[0m
[0m                  [36m<a[39m[0m
[0m                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m[0m
[0m                    [33mhref[39m=[32m"/file-management"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M10 9H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M16 13H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M16 17H8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mFile Management[0m[0m[0m
[0m                  [36m</a>[39m[0m
[0m                [36m</li>[39m[0m
[0m              [36m</ul>[39m[0m
[0m            [36m</nav>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"p-4 space-y-2"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<h3[39m[0m
[0m                [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [0m[0mQuick Actions[0m[0m[0m
[0m              [36m</h3>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mtabindex[39m=[32m"0"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<button[39m[0m
[0m                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<svg[39m[0m
[0m                    [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m[0m
[0m                    [33mfill[39m=[32m"none"[39m[0m
[0m                    [33mheight[39m=[32m"24"[39m[0m
[0m                    [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                    [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                    [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                    [33mstroke-width[39m=[32m"2"[39m[0m
[0m                    [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                    [33mwidth[39m=[32m"24"[39m[0m
[0m                    [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<path[39m[0m
[0m                      [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<polyline[39m[0m
[0m                      [33mpoints[39m=[32m"17 8 12 3 7 8"[39m[0m
[0m                    [36m/>[39m[0m
[0m                    [36m<line[39m[0m
[0m                      [33mx1[39m=[32m"12"[39m[0m
[0m                      [33mx2[39m=[32m"12"[39m[0m
[0m                      [33my1[39m=[32m"3"[39m[0m
[0m                      [33my2[39m=[32m"15"[39m[0m
[0m                    [36m/>[39m[0m
[0m                  [36m</svg>[39m[0m
[0m                  [0m[0mUpload File[0m[0m[0m
[0m                [36m</button>[39m[0m
[0m              [36m</div>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mtabindex[39m=[32m"0"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<button[39m[0m
[0m                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors...[0m
[0m[0m
[0mIgnored nodes: comments, script, style[0m
[0m[36m<html>[39m[0m
[0m  [36m<head />[39m[0m
[0m  [36m<body>[39m[0m
[0m    [36m<div>[39m[0m
[0m      [36m<div>[39m[0m
[0m        [36m<div[39m[0m
[0m          [33mclass[39m=[32m"App"[39m[0m
[0m        [36m>[39m[0m
[0m          [36m<div[39m[0m
[0m            [33mclass[39m=[32m"flex h-screen bg-white"[39m[0m
[0m          [36m>[39m[0m
[0m            [36m<div[39m[0m
[0m              [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m[0m
[0m            [36m>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<span[39m[0m
[0m                  [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m[0m
[0m                [36m>[39m[0m
[0m                  [0m[0mMicro Startup Dashboard[0m[0m[0m
[0m                [36m</span>[39m[0m
[0m              [36m</div>[39m[0m
[0m              [36m<nav[39m[0m
[0m                [33mclass[39m=[32m"flex-1"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<ul[39m[0m
[0m                  [33mclass[39m=[32m"space-y-2 py-4"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<li>[39m[0m
[0m                    [36m<a[39m[0m
[0m                      [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m[0m
[0m                      [33mhref[39m=[32m"/"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<svg[39m[0m
[0m                        [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m[0m
[0m                        [33mfill[39m=[32m"none"[39m[0m
[0m                        [33mheight[39m=[32m"24"[39m[0m
[0m                        [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                        [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                        [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                        [33mstroke-width[39m=[32m"2"[39m[0m
[0m                        [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                        [33mwidth[39m=[32m"24"[39m[0m
[0m                        [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m[0m
[0m                        [36m/>[39m[0m
[0m                      [36m</svg>[39m[0m
[0m                      [0m[0mDashboard[0m[0m[0m
[0m                    [36m</a>[39m[0m
[0m                  [36m</li>[39m[0m
[0m                  [36m<li>[39m[0m
[0m                    [36m<a[39m[0m
[0m                      [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m[0m
[0m                      [33mhref[39m=[32m"/file-management"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<svg[39m[0m
[0m                        [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m[0m
[0m                        [33mfill[39m=[32m"none"[39m[0m
[0m                        [33mheight[39m=[32m"24"[39m[0m
[0m                        [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                        [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                        [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                        [33mstroke-width[39m=[32m"2"[39m[0m
[0m                        [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                        [33mwidth[39m=[32m"24"[39m[0m
[0m                        [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                      [36m>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M10 9H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M16 13H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                        [36m<path[39m[0m
[0m                          [33md[39m=[32m"M16 17H8"[39m[0m
[0m                        [36m/>[39m[0m
[0m                      [36m</svg>[39m[0m
[0m                      [0m[0mFile Management[0m[0m[0m
[0m                    [36m</a>[39m[0m
[0m                  [36m</li>[39m[0m
[0m                [36m</ul>[39m[0m
[0m              [36m</nav>[39m[0m
[0m              [36m<div[39m[0m
[0m                [33mclass[39m=[32m"p-4 space-y-2"[39m[0m
[0m              [36m>[39m[0m
[0m                [36m<h3[39m[0m
[0m                  [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m[0m
[0m                [36m>[39m[0m
[0m                  [0m[0mQuick Actions[0m[0m[0m
[0m                [36m</h3>[39m[0m
[0m                [36m<div[39m[0m
[0m                  [33mtabindex[39m=[32m"0"[39m[0m
[0m                [36m>[39m[0m
[0m                  [36m<button[39m[0m
[0m                    [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m[0m
[0m                  [36m>[39m[0m
[0m                    [36m<svg[39m[0m
[0m                      [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m[0m
[0m                      [33mfill[39m=[32m"none"[39m[0m
[0m                      [33mheight[39m=[32m"24"[39m[0m
[0m                      [33mstroke[39m=[32m"currentColor"[39m[0m
[0m                      [33mstroke-linecap[39m=[32m"round"[39m[0m
[0m                      [33mstroke-linejoin[39m=[32m"round"[39m[0m
[0m                      [33mstroke-width[39m=[32m"2"[39m[0m
[0m                      [33mviewBox[39m=[32m"0 0 24 24"[39m[0m
[0m                      [33mwidth[39m=[32m"24"[39m[0m
[0m                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m[0m
[0m                    [36m>[39m[0m
[0m                      [36m<path[39m[0m
[0m                        [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<polyline[39m[0m
[0m                        [33mpoints[39m=[32m"17 8 12 3 7 8"[39m[0m
[0m                      [36m/>[39m[0m
[0m                      [36m<line[39m[0m
[0m                        [33mx1[39m=[32m"12"[39m[0m
[0m                        [33mx2[39m=[32m"12"[39m[0m
[0m                        [33my1[39m=[32m"3"[39m[0m
[0m                        [33my2[39m=[32m"15"[39m[0m
[0m                      [36m/>[39m[0m
[0m                    [36m</svg>[39m[0m
[0m                    [0m[0mUpload File[0m[0m[0m
[0m         ...[0m

Difference:

[2mCompared values have no visual difference.[22mError: Unable to find an element with the text: /Avg Revenue/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
[36m<body>[39m
  [36m<div>[39m
    [36m<div>[39m
      [36m<div[39m
        [33mclass[39m=[32m"App"[39m
      [36m>[39m
        [36m<div[39m
          [33mclass[39m=[32m"flex h-screen bg-white"[39m
        [36m>[39m
          [36m<div[39m
            [33mclass[39m=[32m"flex flex-col w-64 bg-white border-r border-gray-200 h-screen"[39m
          [36m>[39m
            [36m<div[39m
              [33mclass[39m=[32m"flex items-center justify-center h-16 border-b border-gray-200"[39m
            [36m>[39m
              [36m<span[39m
                [33mclass[39m=[32m"text-gray-900 font-bold text-lg"[39m
              [36m>[39m
                [0mMicro Startup Dashboard[0m
              [36m</span>[39m
            [36m</div>[39m
            [36m<nav[39m
              [33mclass[39m=[32m"flex-1"[39m
            [36m>[39m
              [36m<ul[39m
                [33mclass[39m=[32m"space-y-2 py-4"[39m
              [36m>[39m
                [36m<li>[39m
                  [36m<a[39m
                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900"[39m
                    [33mhref[39m=[32m"/"[39m
                  [36m>[39m
                    [36m<svg[39m
                      [33mclass[39m=[32m"lucide lucide-house mr-3 h-6 w-6"[39m
                      [33mfill[39m=[32m"none"[39m
                      [33mheight[39m=[32m"24"[39m
                      [33mstroke[39m=[32m"currentColor"[39m
                      [33mstroke-linecap[39m=[32m"round"[39m
                      [33mstroke-linejoin[39m=[32m"round"[39m
                      [33mstroke-width[39m=[32m"2"[39m
                      [33mviewBox[39m=[32m"0 0 24 24"[39m
                      [33mwidth[39m=[32m"24"[39m
                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m
                    [36m>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"[39m
                      [36m/>[39m
                    [36m</svg>[39m
                    [0mDashboard[0m
                  [36m</a>[39m
                [36m</li>[39m
                [36m<li>[39m
                  [36m<a[39m
                    [33mclass[39m=[32m"flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"[39m
                    [33mhref[39m=[32m"/file-management"[39m
                  [36m>[39m
                    [36m<svg[39m
                      [33mclass[39m=[32m"lucide lucide-file-text mr-3 h-6 w-6"[39m
                      [33mfill[39m=[32m"none"[39m
                      [33mheight[39m=[32m"24"[39m
                      [33mstroke[39m=[32m"currentColor"[39m
                      [33mstroke-linecap[39m=[32m"round"[39m
                      [33mstroke-linejoin[39m=[32m"round"[39m
                      [33mstroke-width[39m=[32m"2"[39m
                      [33mviewBox[39m=[32m"0 0 24 24"[39m
                      [33mwidth[39m=[32m"24"[39m
                      [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m
                    [36m>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M14 2v4a2 2 0 0 0 2 2h4"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M10 9H8"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M16 13H8"[39m
                      [36m/>[39m
                      [36m<path[39m
                        [33md[39m=[32m"M16 17H8"[39m
                      [36m/>[39m
                    [36m</svg>[39m
                    [0mFile Management[0m
                  [36m</a>[39m
                [36m</li>[39m
              [36m</ul>[39m
            [36m</nav>[39m
            [36m<div[39m
              [33mclass[39m=[32m"p-4 space-y-2"[39m
            [36m>[39m
              [36m<h3[39m
                [33mclass[39m=[32m"text-sm font-semibold text-gray-600 mb-2"[39m
              [36m>[39m
                [0mQuick Actions[0m
              [36m</h3>[39m
              [36m<div[39m
                [33mtabindex[39m=[32m"0"[39m
              [36m>[39m
                [36m<button[39m
                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 w-full flex items-center justify-center"[39m
                [36m>[39m
                  [36m<svg[39m
                    [33mclass[39m=[32m"lucide lucide-upload mr-2 h-4 w-4"[39m
                    [33mfill[39m=[32m"none"[39m
                    [33mheight[39m=[32m"24"[39m
                    [33mstroke[39m=[32m"currentColor"[39m
                    [33mstroke-linecap[39m=[32m"round"[39m
                    [33mstroke-linejoin[39m=[32m"round"[39m
                    [33mstroke-width[39m=[32m"2"[39m
                    [33mviewBox[39m=[32m"0 0 24 24"[39m
                    [33mwidth[39m=[32m"24"[39m
                    [33mxmlns[39m=[32m"http://www.w3.org/2000/svg"[39m
                  [36m>[39m
                    [36m<path[39m
                      [33md[39m=[32m"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"[39m
                    [36m/>[39m
                    [36m<polyline[39m
                      [33mpoints[39m=[32m"17 8 12 3 7 8"[39m
                    [36m/>[39m
                    [36m<line[39m
                      [33mx1[39m=[32m"12"[39m
                      [33mx2[39m=[32m"12"[39m
                      [33my1[39m=[32m"3"[39m
                      [33my2[39m=[32m"15"[39m
                    [36m/>[39m
                  [36m</svg>[39m
                  [0mUpload File[0m
                [36m</button>[39m
              [36m</div>[39m
              [36m<div[39m
                [33mtabindex[39m=[32m"0"[39m
              [36m>[39m
                [36m<button[39m
                  [33mclass[39m=[32m"whitespace-nowrap rounded-md text-sm font-medium transition-colors...
    at waitForWrapper (/home/project/node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/wait-for.js:163:27)
    at _callee14$ (/home/project/src/__tests__/ConcurrentActions.test.jsx:157:18)
    at call (/home/project/src/__tests__/ConcurrentActions.test.jsx:2:1)
    at Generator.tryCatch (/home/project/src/__tests__/ConcurrentActions.test.jsx:2:1)
    at Generator._invoke [as next] (/home/project/src/__tests__/ConcurrentActions.test.jsx:2:1)
    at asyncGeneratorStep (/home/project/src/__tests__/ConcurrentActions.test.jsx:2:1)
    at asyncGeneratorStep (/home/project/src/__tests__/ConcurrentActions.test.jsx:2:1)
    at https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3.w-credentialless-staticblitz.com/blitz.134daa3c.js:40:22853
```