export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          React Components Library
        </h1>
        <p className="mt-2 text-gray-500">
          Abra o Storybook para visualizar os componentes:
        </p>
        <pre className="mt-4 inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm text-green-400">
          npm run storybook
        </pre>
      </div>
    </main>
  );
}
