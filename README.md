# tachiyomi-aidoku-converter
Tachiyomi to Aidoku backup converter

## Building
```
pnpm install
pnpm build
```

Once that's done, take `dist/index.js` and put it in your server, load it with a script tag.
There's now a `Tachidoku.toAidoku` function which takes a `Uint8Array` and returns an `AidokuResult`:
```
interface AidokuResult {
	backup: AidokuBackup;
	dateString: string;
}
```

## Writing converters
Aidoku sources are just built different, so converters need to be written to transform
Tachiyomi manga objects to something that Aidoku sources can understand. Check out the
[converters](https://github.com/beerpiss/tachiyomi-aidoku-converter/tree/trunk/src/converters).
