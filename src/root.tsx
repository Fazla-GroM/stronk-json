// @refresh reload
import './fancy-ui-core/styles/theme.css' //@TODO: find a way to handle this

import { Suspense } from 'solid-js'
import { A, Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from 'solid-start'

import { BaseLayout } from './BaseLayout'
import { ThemeProvider, ThemeSSRScript } from './fancy-ui-solid'

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>SolidStart - Bare</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
                <ThemeSSRScript initialMode="system" storageKey="stronk_json_theme" />
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <ThemeProvider initialMode="system" storageKey="stronk_json_theme">
                            <BaseLayout>
                                <A href="/">Index</A>
                                <A href="/about">About</A>
                                <Routes>
                                    <FileRoutes />
                                </Routes>
                            </BaseLayout>
                        </ThemeProvider>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    )
}
