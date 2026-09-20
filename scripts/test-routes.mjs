const routes = [
  '/',
  '/about',
  '/services',
  '/services/software-development',
  '/services/web-development',
  '/services/mobile-app-development',
  '/services/business-management-systems',
  '/services/ecommerce-solutions',
  '/services/ui-ux-design',
  '/services/cloud-solutions',
  '/services/it-consulting',
  '/solutions',
  '/work',
  '/process',
  '/insights',
  '/insights/future-of-scalable-cloud-architecture',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  '/cookie-preferences',
  '/disclaimer',
  '/accessibility',
  '/maintenance',
  '/sitemap.xml',
  '/robots.txt'
];

async function checkAll() {
  console.log('--- Starting NEXVISION Route Health Check ---');
  let failures = 0;

  for (const r of routes) {
    const url = `http://localhost:3000${r}`;
    try {
      const res = await fetch(url);
      const text = await res.text();
      if (res.status === 200) {
        console.log(`[PASS 200] ${r.padEnd(45)} (${(text.length / 1024).toFixed(1)} KB)`);
      } else {
        console.error(`[FAIL ${res.status}] ${r}`);
        failures++;
      }
    } catch (err) {
      console.error(`[ERROR] ${r} - ${err.message}`);
      failures++;
    }
  }

  // Test API contact endpoint with POST request
  console.log('--- Testing API Contact Form Validation ---');
  try {
    const apiRes = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: "Test Engineer",
        email: "engineer@nexvisiontech.com",
        serviceCategory: "Custom Software Development",
        description: "Enterprise software architecture consultation request."
      })
    });
    const apiData = await apiRes.json();
    if (apiRes.status === 200 && apiData.success) {
      console.log(`[PASS 200] /api/contact POST: Successfully received & validated payload`);
    } else {
      console.error(`[FAIL] /api/contact:`, apiData);
      failures++;
    }
  } catch (err) {
    console.error(`[ERROR] /api/contact: ${err.message}`);
    failures++;
  }

  console.log('---------------------------------------------');
  if (failures === 0) {
    console.log('All 27 routes and endpoints verified successfully! 100% HEALTHY.');
  } else {
    console.error(`Route health check failed with ${failures} errors.`);
    process.exit(1);
  }
}

checkAll();
