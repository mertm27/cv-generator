import { CVProvider } from './context/CVContext';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import DownloadButton from './components/DownloadButton';

function App() {
  return (
    <CVProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-gray-900">CV Generator</h1>
            <p className="text-gray-600 mt-1">Create your professional CV with live preview</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">CV Information</h2>
                <CVForm />
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">CV Preview</h2>
                  <DownloadButton />
                </div>
                
                <div className="flex justify-center">
                  <CVPreview />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-gray-500 text-sm">
              <p>Built with React, TypeScript, and TailwindCSS</p>
              <p className="mt-1">Your data is stored locally and never sent to any server</p>
            </div>
          </div>
        </footer>
      </div>
    </CVProvider>
  );
}

export default App;
