const assets = {
    css: '/static/css/main.css',
    js: '/static/js/main.js'
}

export default function(app, preloadedState) {

    
    return `
            <!doctype html>
            <html>
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Redux Universal Example</title>
                <link rel="stylesheet" href="${assets.css}">
            </head>
            <body>
                <div id="root">${app}</div>
                <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src=${assets.js} charset="utf-8"></script>
                
            </body>
            </html>`
}