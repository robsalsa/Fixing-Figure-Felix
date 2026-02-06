import Link from 'next/link'

export default function HomePage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center p-8">
			<h1 className="text-4xl font-bold mb-4">Home — Test Page</h1>
			<p className="mb-6">This is a simple home page to verify the app is running.</p>
			<div className="flex gap-4">
				<Link href="/[local]/about" className="text-blue-600 underline">About</Link>
				<Link href="/" className="text-blue-600 underline">Root</Link>
			</div>
		</main>
	)
}

