import React from 'react'

const GoogleAnalyticsScript = () => {
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-JP2BN75F6Q" />
            <script>
                {` window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-JP2BN75F6Q');`}
            </script>
        </>
    )
}

export default GoogleAnalyticsScript
