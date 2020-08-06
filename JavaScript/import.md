## Named export

reducers/counter.js

```js
export const reducer = () {
	return (...)
}
```

reducers.result.js

```js
export const reducer = () {
	return (...)
}
```

index.js

```js
import { reducer as counterReducer } from "./sore/reducers/counter";
import { reducer as resultReducer } from "./sore/reducers/result";
```

## Default export

reducers/counter.js

```js
const reducer = () {
	return (...)
}

export default reducer
```

reducers.result.js

```js
export const reducer = () {
	return (...)
}

export default reducer
```

index.js

```js
import reducer from "./sore/reducers/counter";
import reducer from "./sore/reducers/result";
```

### Syntax

```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
```
