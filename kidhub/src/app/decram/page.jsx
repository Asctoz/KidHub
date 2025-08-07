'use client';
import { useState } from 'react';
import { CodeBlock } from '@/components/CodeBlock';

export default function Home() {
    const [tab, setTab] = useState('preview');

    const iframeUrl = 'https://example.com'; // replace with student URL
    const code = `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);
 
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
 
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`

    return (
        <main className="min-h-screen bg-black text-white px-4 py-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">🎓 Student Website Showcase</h1>
            <p className="text-gray-400 mb-8">View student projects in real-time.</p>

            <div className="w-full max-w-4xl bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-xl">
                {/* Tabs */}
                <div className="flex">
                    <button
                        onClick={() => setTab('preview')}
                        className={`w-1/2 py-3 text-sm font-medium border-b-2 transition ${tab === 'preview'
                            ? 'border-white bg-gray-800'
                            : 'border-transparent hover:bg-gray-800'
                            }`}
                    >
                        Preview
                    </button>
                    <button
                        onClick={() => setTab('code')}
                        className={`w-1/2 py-3 text-sm font-medium border-b-2 transition ${tab === 'code'
                            ? 'border-white bg-gray-800'
                            : 'border-transparent hover:bg-gray-800'
                            }`}
                    >
                        Code
                    </button>
                </div>

                {/* Content */}
                <div className="aspect-video bg-black">
                    {tab === 'preview' ? (
                        <iframe
                            src={iframeUrl}
                            className="w-full h-full"
                            loading="lazy"
                            title="Student Website"
                        />
                    ) : (
                        <pre className="p-4 text-green-300 text-sm font-mono whitespace-pre-wrap">
                            <CodeBlock
                                language="jsx"
                                filename="DummyComponent.jsx"
                                highlightLines={[9, 13, 14, 18]}
                                code={code}
                            />
                        </pre>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 flex justify-between items-center bg-gray-800 border-t border-gray-700">
                    <span className="text-sm text-gray-400">by <strong className="text-white">Student Name</strong></span>
                    <a
                        href={iframeUrl}
                        target="_blank"
                        className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 text-sm font-medium transition"
                    >
                        Visit Site
                    </a>
                </div>
            </div>
        </main>
    );
}
