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

After you import the backup, use the migration feature to migrate the entries.
