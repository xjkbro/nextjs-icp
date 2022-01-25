import Script from "next/script";

export default function ScriptImport() {
    return <>
        <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
            strategy="beforeInteractive"
        />
        <Script src="/scripts/products-script.js" />
        <Script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" />
    </>;
}
