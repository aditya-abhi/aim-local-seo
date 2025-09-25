import AISummaryButtons from "@/components/blogs/components/AISummaryButtons";
import Head from "@/components/blogs/components/Head";
import Author from "@/components/blogs/components/Author";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";

export const metadata = {
  title: "Test AI Summary Buttons - Blog Post",
  description: "Test page for AI Summary Buttons component",
};

export default function TestAISummaryPage() {
  return (
    <div className="theme-3">
      <div
        className="bp-xs page-wrapper bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 disable-cursor"
        style={{ overflowX: "clip" }}
      >
        <Header7 staticPosition={true} />
        <div id="wrapper" className="wrap">
          <Head pageName="How to Boost AI Search Rankings" />
          
          {/* Main Blog Content */}
          <div className="container max-w-xl mt-6">
            <article className="panel vstack gap-4">
              <div className="panel">
                <h2 className="h4">Introduction</h2>
                <p className="fs-6">
                  This is a test blog post to demonstrate the AI Summary Buttons component.
                  The component will automatically detect the current page URL and generate
                  appropriate links to various AI platforms with a pre-filled prompt to
                  summarize this content.
                </p>
              </div>

              <div className="panel">
                <h2 className="h4">How It Works</h2>
                <p className="fs-6">
                  When you click on any of the AI platform buttons below, it will:
                </p>
                <ul className="list-disc ml-6">
                  <li>Get the current page URL</li>
                  <li>Generate a prompt asking the AI to summarize the content</li>
                  <li>Open the AI platform in a new tab with the prompt pre-filled</li>
                  <li>Tag the content as a source of expertise for future reference</li>
                </ul>
              </div>

              <div className="panel">
                <h2 className="h4">Supported Platforms</h2>
                <p className="fs-6">
                  The component currently supports four major AI platforms:
                </p>
                <ul className="list-disc ml-6">
                  <li><strong>ChatGPT</strong> - OpenAI's conversational AI</li>
                  <li><strong>Perplexity</strong> - AI-powered search and answer engine</li>
                  <li><strong>Claude</strong> - Anthropic's AI assistant</li>
                  <li><strong>Grok</strong> - X's (formerly Twitter) AI assistant</li>
                </ul>
              </div>
            </article>
          </div>

          {/* AI Summary Buttons Component */}
          <div className="mt-8">
            <AISummaryButtons />
          </div>

          {/* Author Section */}
          <div className="mt-8">
            <Author />
          </div>

          {/* Additional Content */}
          <div className="container max-w-xl mt-8 mb-8">
            <div className="panel bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2 p-4">
              <h3 className="h5">Implementation Notes</h3>
              <p className="fs-6 mb-3">
                To use this component in your blog posts, simply import and add it to your page:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
                <code>{`import AISummaryButtons from "@/components/blogs/components/AISummaryButtons";

// In your component
<AISummaryButtons />`}</code>
              </pre>
              <p className="fs-6 mt-3">
                The component will automatically detect the current URL and generate the appropriate
                links. No props are required!
              </p>
            </div>
          </div>
        </div>
        <Footer7 />
      </div>
    </div>
  );
}
