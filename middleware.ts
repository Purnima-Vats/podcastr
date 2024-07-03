import {
    clerkMiddleware,
    createRouteMatcher
} from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
])

export default clerkMiddleware((auth, req) => {
    if (!isPublicRoute(req)){
        auth().protect();
    }
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};




// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
// import { NextResponse } from 'next/server';


// const isPublicRoute = createRouteMatcher([
//     "/",
//     "/events/:id",
//     "/api/webhook/clerk",
//     "/api/webhook/stripe",
//     "/api/uploadthing",
//     "/sign-in(.*)",
//     "/sign-up(.*)",
//     "/api/webhook(.*)",
//     "/api/webhook"

// ]);

// const isIgnoredRoute = createRouteMatcher([
//     "/api/webhook/clerk",
//     "/api/webhook/stripe",
//     "/api/uploadthing",
//     "/api/webhook(.*)",
// ]);

// export default clerkMiddleware((auth, req) => {
//     if (isIgnoredRoute(req)) {
//         return NextResponse.next(); // Completely bypass Clerk for ignored routes
//     }

//     if (!isPublicRoute(req)) {
//         auth().protect();
//     }

// });
// export const config = {
//     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };