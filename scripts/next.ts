import { buildBundle, renderNextAction } from './content-engine.ts';

async function main() {
  const bundle = buildBundle();
  console.log(renderNextAction(bundle));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
