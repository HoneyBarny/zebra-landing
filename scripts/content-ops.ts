import { buildBundle, getSummary, writeAllReports } from './content-engine.ts';

async function main() {
  const bundle = buildBundle();
  const wroteReports = writeAllReports(bundle);

  if (!wroteReports) {
    console.log('Growth strategy directory not found. Skipping report writes.');
  }

  console.log(JSON.stringify(getSummary(bundle), null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
