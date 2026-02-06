import Link from 'next/link'

export default function AboutPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center p-8">
			<h1 className="text-4xl font-bold mb-4">About — Test Page</h1>
			<p className="mb-6">This is a simple about page to help test routing and rendering.</p>
			<div className="flex gap-4">
				<Link href="/[local]/home" className="text-blue-600 underline">Home</Link>
				<Link href="/" className="text-blue-600 underline">Root</Link>
			</div>
		</main>
	)
}

