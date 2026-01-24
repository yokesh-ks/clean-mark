#!/usr/bin/env node

/**
 * Test script for the URL to Markdown Converter API
 * 
 * This script tests the API endpoint: https://url-to-markdown-convertor.ksyokesh98.workers.dev/
 * 
 * Usage: node test-api.js
 */

const https = require('https');
const http = require('http');

// API Configuration
const API_URL = 'https://url-to-markdown-convertor.ksyokesh98.workers.dev/';
const TEST_URL = 'https://stackoverflow.com/questions/79873503/pgadmin-wont-answer-correctly';

// Request headers (using working desktop Chrome headers)
const headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
  'Cache-Control': 'no-cache',
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive'
};

// Request body
const requestBody = JSON.stringify({
  url: TEST_URL,
  title: true,
  links: true,
  clean: true
});

/**
 * Make HTTP request to the API
 */
function makeRequest() {
  console.log('🧪 Testing URL to Markdown Converter API');
  console.log('==========================================');
  console.log(`📍 API Endpoint: ${API_URL}`);
  console.log(`📄 Test URL: ${TEST_URL}`);
  console.log('📋 Request Configuration:');
  console.log('   - Method: POST');
  console.log('   - Content-Type: application/json');
  console.log('   - Headers: Custom browser-like headers');
  console.log('');

  const url = new URL(API_URL);
  const options = {
    hostname: url.hostname,
    port: url.port || (url.protocol === 'https:' ? 443 : 80),
    path: url.pathname,
    method: 'POST',
    headers: {
      ...headers,
      'content-length': Buffer.byteLength(requestBody, 'utf8')
    }
  };

  const httpModule = url.protocol === 'https:' ? https : http;
  
  const req = httpModule.request(options, (res) => {
    console.log(`📡 Response Status: ${res.statusCode} ${res.statusMessage}`);
    console.log('📋 Response Headers:');
    Object.keys(res.headers).forEach(key => {
      console.log(`   ${key}: ${res.headers[key]}`);
    });
    console.log('');

    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('📄 Response Body:');
      console.log('================');
      
      try {
        // Try to parse as JSON first
        const jsonData = JSON.parse(data);
        console.log(JSON.stringify(jsonData, null, 2));
      } catch (e) {
        // If not JSON, print as text
        console.log(data);
      }
      
      console.log('');
      console.log('✅ Test completed successfully!');
    });
  });

  req.on('error', (error) => {
    console.error('❌ Request failed:');
    console.error(`   Error: ${error.message}`);
    console.error(`   Code: ${error.code}`);
    console.error(`   Host: ${options.hostname}`);
  });

  // Set timeout
  req.setTimeout(30000, () => {
    console.error('⏰ Request timed out after 30 seconds');
    req.abort();
  });

  // Write request body
  req.write(requestBody);
  
  // End request
  req.end();
}

/**
 * Run the test
 */
function runTest() {
  console.log('🚀 Starting API Test');
  console.log('====================');
  console.log('');
  
  makeRequest();
}

// Handle command line arguments
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log('Usage: node test-api.js');
  console.log('');
  console.log('This script tests the URL to Markdown Converter API with a sample request.');
  console.log('');
  console.log('Options:');
  console.log('  --help, -h    Show this help message');
  process.exit(0);
}

// Run the test
runTest();