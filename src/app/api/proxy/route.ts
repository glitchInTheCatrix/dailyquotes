import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const targetUrl = 'https://zenquotes.io/api/quotes';

  try {

    // Forward the request to the target API
    const apiResponse = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      },
    });

    // Relay the response back to the client
    const data = await apiResponse.json();
    return NextResponse.json(data, { status: apiResponse.status });
  } catch (error:unknown) {
    console.error('Proxy Error:', error);
    return NextResponse.json({ error: error, message: 'Proxy Error' }, { status: 500 });
  }
}
