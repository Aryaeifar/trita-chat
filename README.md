# Chatbox Project

## Demo

``` bash 
    https://trita-chat.vercel.app/

```

## Overview

Chatbox is a web-based chat application developed using Vue.js and Nuxt 3. The app facilitates real-time messaging in a group chat environment, supporting text and image messages, file uploads, and persistent chat history through local storage. The application is designed with responsiveness in mind, ensuring a smooth experience across various devices and browsers.


این برنامه چت با vue3 و Nuxt3 توسعه داده شد. کاربر با این برنامه میتواند بصورت پویا یک چت با نام و عکس و نوع چت مشخص کند و بسازد. با کلیک روی چت کاربر به صفحه مورد نظر منتقل میشود.
کاربر میتواند در صفحه چت مورد نظر پیام خود را تایپ کند یا عکس و فایل انتخاب کند و پیام خود را ارسال کند. پیام ها در local storage ذخیره میشوند و اگر چندین تب باهم باز شوند local storage کاملا هماهنگ پیام جدید را در تب های مختلف نمایش میدهد.
برای تغییر حالت پیام دهنده در صفحه میتوانید از دکمه user type در بالای صفحه استفاده کنید.

برای ساخت چت جدید میتوانید از دکمه + کنار سرچ استفاده کنید. در مدال باز شده مشخصات چت را پر کنید و گذینه submit را بزنید.
در صورت پر نکردن اطلاعات چت با دیتا دیفالت ساخته میشود و در حال حاضر validation برای ان در نظر گرفته نشده است.

مقدار پیام خوانده نشده به صورت استاتیک در حال نمایش است ولی شما میتوانید به صورت دستی در کامپوننت newChat تغییر دهید.


نکته:
1- کامپوننت newChat با option api نوشته شده است.


## Features

- **چت جدید**: قابلیت ساخت چت جدید.
- **فضای ذخیره هماهنگ**: چت در تب های مختلف sync است.
- **ذخیره چت**: پیام ها در local storage ذخیره میشوند.
- **طراحی رسپانسیو**: برنامه برای desktop  و mobile کاملا رسپانسیو نوشته شده است..
- **اسکرول چت**: قابلیت scroll to button در چت.


**ارسال پیام**

   - برای ارسال پیام، در صفحه چت پیام را نوشته و اینتر یا گذینه ارسال را بزنید.
   - برای ارسال عکس یا فایل گذینه attach را بزنید.

**اسکرول**

   - با هر ارسال پیام چت به اخرین پیام ارسال شده اسکرول میشود
   - با زدن دکمه اسکرول ب پایین به اخرین پیام ارسال شده میرید


## Technology

- **Vue.js**: Vue.js 3.
- **Nuxt.js**: Nuxt 3.
- **FileReader API**: برای نمایش تصویر و فایل ها.
