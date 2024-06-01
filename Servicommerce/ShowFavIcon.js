         function getDomain(url) {
            const a = document.createElement('a');
            a.href = url;
            return a.hostname;
        }

        function showFavicon() {
            const url = document.getElementById('urlInput').value;
            const domain = getDomain(url);
            const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}`;
            document.getElementById('favicon').src = faviconUrl;
        }