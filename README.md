# azure-storage-browser
Bundled (browserify) azure-storage JS client library that can be directly used in the browser environment, allowing you to import the azure-storage module like any other node module.

Built directly from the azure-storage project source file without any modification. The typing file was changed to make the continuation token parameters nullable to pass strict Typescript null check.

The version number is set to track the version of `azure-storage` from which this package is built.

# Install

```bash
npm install --save @hobbytraceorg/azure-storage-browser
```

# Usage
```Typescript
import * as azure from '@hobbytraceorg/azure-storage-browser';
// Now you can use `azure` as documented in the azure-storage project.
```
The original type definitions are included in this project so Typescript is supported out of the box.