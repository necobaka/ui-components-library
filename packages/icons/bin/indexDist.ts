#!/usr/bin/env node
import { generateEntryFile } from './utils/generateEntryFile.ts';

// Ensure that files are generated before generating the entry file
await generateEntryFile(`vue`, 'vue');
