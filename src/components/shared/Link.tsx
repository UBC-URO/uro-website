export function Link({ href, label }: { href: string; label: string }) {
    return (
        <a href={href} className="text-teal-600 underline hover:text-teal-700">
            {label}
        </a>
    );
}
