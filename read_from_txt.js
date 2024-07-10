import { pathToFileURL } from 'node:path';
import { SourceFile } from '@chunkd/source-file';

const source = new SourceFile(pathToFileURL('./cog.tif'));

// Read in the first 1KB of data
await source.fetch(0, 1024);

// Read the last 1KB of data
await source.fetch(-1024);
