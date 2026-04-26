const fs = require('fs');
const path = require('path');

const files = [
  'node_modules/sanity/lib/_chunks-es/structureTool.js',
  'node_modules/sanity/lib/index.js'
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Remove from imports (named import)
    content = content.replace(/useEffectEvent,/g, '');
    content = content.replace(/, useEffectEvent/g, '');
    
    // 2. Add shim at the top if not present
    if (!content.includes('const __useEffectEvent_shim')) {
      content = 'const __useEffectEvent_shim = (fn) => fn;\n' + content;
    }
    
    // 3. Replace the function name in the code
    // We use a regex that matches the function name followed by an open paren
    // but we ONLY replace the name itself.
    content = content.replace(/\buseEffectEvent\(/g, '__useEffectEvent_shim(');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});
