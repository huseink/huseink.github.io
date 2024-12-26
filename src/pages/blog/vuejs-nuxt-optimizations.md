---
layout: ../../layouts/Post.astro
title: VueJS & Nuxt Optimizations
description: How to speed up NuxtJS projects for better response times
locale: EN
tags:
  - python
date: 2022-04-28T13:10:23.402Z
---

## 1) Lazy loading and Prefetching

A **method** of loading modules in the application **upon** user **request**. Example case of that is the usage of modals or tooltips. There is no need to load **all** of the modules whenever the page loads. If a modal or such modules are not shown with a page load, they should be **lazy-loaded.**

**![](https://lh5.googleusercontent.com/sOtIiJdhNUEgnm0oFy-xidMa-v8v_e8-veZDrsSH3WcGMmU0nZlcLn69Ev4RRs9C2Wh_bScnPseyVBorWf-4xTLfMUUDyOMB6Gxk--sHhyP9G8-kepffOWYzvYfSDwJ-wDQVFSV_TRbdrUInRH9Ul2sQxrr0O4nswNMt0TXK9YoljVq5_W26fHtuIBU5)**

### Standard way of importing

Whenever a module is imported in a standard way. It will be added as a **node** of a main.js in the dependency graph and bundled with it.
![](https://lh4.googleusercontent.com/0ehZwJXilTrUWKBNu0d1twxVKdEbNPX_r1VFkEu7KWY42heiFcYCOYOBJgH5G98gEaDyGgcwYQ_N56y0_sbfd-8POH9sxkkcRvgllOxok1EjHd_l_0mIIhH9E4QQELKu5uIJdn95S0JUhro-TF6q10_k97Up53w1bzuVo_2vn4cwW1cCnEzcMxqdRIUj)

### Lazy Loading

This way webpack will bundle the content of the dynamically imported module into a separate file. Which will be used upon a request.
![](https://lh4.googleusercontent.com/0ehZwJXilTrUWKBNu0d1twxVKdEbNPX_r1VFkEu7KWY42heiFcYCOYOBJgH5G98gEaDyGgcwYQ_N56y0_sbfd-8POH9sxkkcRvgllOxok1EjHd_l_0mIIhH9E4QQELKu5uIJdn95S0JUhro-TF6q10_k97Up53w1bzuVo_2vn4cwW1cCnEzcMxqdRIUj)

![](https://lh3.googleusercontent.com/Isl-YBbXcnh36IjEjYXWfj6earohuCbFyOwHxO6dSlYHzBpx5pF-Xf-d9kyZ1beE8WvRTu91p7ymNmEFwZQOIs4tJnpTn7N-RyhbHJ2vrUDKV9sQdTd2UB50_mYIH6KVpnbIut91fuU5pN-aSjfZvQX1PjXCz_icyeHf3MkNFCJ1g1Ubb2qwz-bQhmNX)

### Route-based lazy loading with vue-router

Dynamically imported components on the routes work the same way and **reduce** the **overall** **size** of the bundle which does have **huge impact** on the **performance** of the application.

**This is done automatically on Nuxt**

![](https://lh4.googleusercontent.com/Lq-GCo3D5ZETHAgCFs9uzN8ROtbj9BLdNfhyKYAYfOWlLDsPm856OLuAhXeaJlu84o_lNre-tmo3Qe6Caj69rDG25_bm190Vtpc0B_f1qsrBeIwJ8Dm_Ve-0Uyi4NnIG0jOL864ihJKWDQ-0u5No0BlDTmTn9QjNaNE4Hy0pMEqHM6AGAdkBA-Un6-yM)

### The drawback of lazy-loading on UX

Although lazy loading saves some bytes and increases performance of the initial load, the lazy loaded modules are still **needed** for the application to work properly. Those modules need to be **downloaded** at the **point of interaction**, which means the user will have to wait for the module to be downloaded to be able to see it (ex. a modal). If the module is doing a **heavy work** that would take more than 100ms according to [RAIL model guidelines](https://web.dev/rail/) is too much to wait.

That’s where **Prefetch** comes into play.

### Prefetching

Prefetching in simple words, is just **downloading** certain **resources** that may be **needed** in a **future** before they are requested by the browser. In our case this might be a lazily loaded modal window or a lazily loaded route. For example if we’re in a page of the application, we could prefetch any other pages that the user has a **high chance** of visiting.

What’s important is that the prefetching will **only** start after the **initial load** is **completed** and the **browser becomes idle**. This way prefetching **does not affect** the page **load speed** or the **interactivity** of the loaded page.

### Prefetching on Vue and Nuxt

With Nuxt every <nuxt-link> in currently opened route will prefetch it’s content automatically. But with Vue, the below example usage is required.

![](https://lh6.googleusercontent.com/5X_6s1RvxR_SjJajUBAc7uBMlcEpc1a43hy-U85aYZ9C5szKOfktZAxlNhNIQppJqPkc1XYzyBMjEwC8jdGAjcuCc0hJvVulQd9avrdhMoyHcVr_xFafhpvWlKZ4xwix8--NmIaYTQaqgA1ihyXN2wBHnJazS6wZ7DOgFd3RbB7ZA_8Sopq8QVTPEeKj)

## 2) Optimizing Third-Party Dependencies

The code that we write by ourselves is just a small piece of our production bundle. Most of its content is filled with third-party dependencies. A simple library, can in fact, contain more code than your whole application!

We usually do a lot of different optimizations in our own code hoping that they will make our apps faster when in reality it’s not our code that makes them slow - it’s others code!

We can **analyze** the build bundle by using “**webpack-bundle-analyzer**” package or adding the “**--report**” parameter to the build script of the **vue-cli**.

### Using minified versions of imported UI components

**![](https://lh5.googleusercontent.com/ltJfcrhesikThwAl_4oxIfWU12P1v9g9XJpt7R1CfQPhjR09qwBoMkneggLF3gzsuQT0mjrCHfnvIdIjYJ4dfbKQFr0t6aTWzD2F3uVz-dHC4KMYcg-uTEG5KMG_yaQfRb-PitHY9SqlWpE9zfxc4dJt9YFKHeBx2GP7i-TyTy3DktBaa97p7TyU7FHc)![](https://lh5.googleusercontent.com/ltJfcrhesikThwAl_4oxIfWU12P1v9g9XJpt7R1CfQPhjR09qwBoMkneggLF3gzsuQT0mjrCHfnvIdIjYJ4dfbKQFr0t6aTWzD2F3uVz-dHC4KMYcg-uTEG5KMG_yaQfRb-PitHY9SqlWpE9zfxc4dJt9YFKHeBx2GP7i-TyTy3DktBaa97p7TyU7FHc)**

| **Before Minify** | **After Minify** |
| ----------------- | ---------------- |
| app (3.01 MiB)    | app (2.77 MiB)   |

## 3) Caching

Have you noticed that pages that you’re visiting most often are loading a little bit faster than other ones? This is happening because our browsers are smart enough to cache files that will be potentially useful in the future.

Caching is a process of storing commonly-used data in a quick to access memory so it can be used immediately after its requested. Because of that our browsers can sometimes omit the network and immediately access files that we regularly use from our own machine.

### Browser Caching

When the cache headers are done correctly on the backend, the browser will automatically cache the results in Memory Cache (persists until the browser is closed) which is stored in RAM and in Disk Cache which persists much longer but is stored in a hard drive that takes much longer to access.

We can retrieve files from browser cache only when we have a stable network connectivity. No matter what we have in there if we’re offline we will always see “No Internet” page.

### Service Workers and Cache API

**The Cache API** is a system for storing and retrieving network requests and their corresponding responses. These might be regular requests and responses created in the course of running your application, or they could be created for the purpose of storing data for later use.

**Service Worker**, in short, is a JavaScript code that runs a different thread than your app and acts like a Proxy between the browser and the network. It means that we have full control over network requests and responses in our web app! We can change request URL, parameters or even the response.

With Service Workers and Cache API we can **programmatically** serve certain files that we have previously put in the **cache** as **responses** to specific network **requests**.

### Caching with Workbox

Mastering Service Workers and Cache API could be a time-consuming process but thankfully there is a great library that allows us to benefit from these browser features without learning it’s complicated APIs - Workbox. Workbox configuration can be edited further to cache not only the static files (css,ico,png,html,js) but also the dynamic requests (png,jpg,jpeg,svg,json) which will drastically improve the performance of the application.

**![](https://lh6.googleusercontent.com/B6xIA_18cZJ4SASB0fMAP2LqOYoRlMNnj2KDsRhcaSsT6LHqCgsnfYx5xYSKKfK7KpqxkxuC0uPsI-xykczZai5zu9NCh3WYihs8-_Cy4dd5ZSqCClRb6jl8K2Xbte0SnGO_WxuDWD4UsDBewSi_CJfXDOBByZGnNkXr8Jhu-1aMk-D-21uauKOEZqCC)**

## 4) Optimizing and Compressing Images

Images contribute a lot to the application’s bundle size. When the app renders the images with considerable sizes can increase the app’s loading time. What we can do is optimize the way to serve images. And for that, we can locally compress the images or use CDNs.

## 5) Reduce Unnecessary CSS

On the application, we often might have CSS that are not being used but take up space. There are libraries like “PurgeCSS”.

**![](https://lh6.googleusercontent.com/hZv0PDXFWPzgHXgW4gvRzF0UwugeRWtZN0UkgCzYKbXPVrtDPp7xxxbDLyqBcfrh0piBxrfdr3I5yynbkxkZU8yJt3TmQ3dWlBO79Fb0qTS6wIeS0bizxxS94FVZz2ddxFQQu0YHykn1fxorWOXgq5zuu8UQM3YUfyC7BFB9PwTTX-66RbZYUide0YfV)![](https://lh6.googleusercontent.com/n22INt3sQ5stapKdt2xwjV4j7YaAv1MhGvQV0MYxQ7SmKnxhbWJDSzAccn6tr-FvEjvr2z3Uu7HFs7uVgofck4dU4BlQwnUuB7LDR38qngNLJg_I5fIXRE006ItGg7GJwgyyV_UmCKflzJxb7I5AduaB1oEOoc15OeGhZHmw7qX6eGTo_nAYA86P71ut)**

> **“To optimize the whole, we must sub-optimize the parts.”**

![](https://lh3.googleusercontent.com/tf5m7_Jbu4LtWha8NzLS2s6a0NdbgP81ii2nJtoDsobj_LCG2UET20BLo-LiCh5FqIXIwVDzonUlhTAXnjXWbgFWDz4fAJlAlhqD19qu4c5E9DGtJb4ZYaPw0wg93qqHleQhXvngHLxJFeekoUjHnH_XsGrkYApd_fbF13dAivAnQuq5nq2i2vt-eFC9)

## Before and After Optimization Results of Mojob's Homepage

![](https://i.ibb.co/FbVPvCF/image-3.png)
![](https://i.ibb.co/ZxqYQyG/image-1.png)
![](https://i.ibb.co/zH35zW7/image-2.png)
