---
title: "OS fix: auth by dojo"
summary: "Fix issue where social user saving fails after oauth callback"
date: "Oct 02 2024"
draft: false
tags:
- open source
- contribution
- fix
- laravel
---

Another contribution, this time it's the dev dojo's amazing auth package.

The fix is simple but debugging and finding the issue was so much fun, I had to dig deep into the Laravel source code and the <a href='https://devdojo.com/auth/' target='_blank'>devdojo/auth</a> to see the breaking change that caused the issue.

More context on the issue in the <a href='https://github.com/thedevdojo/auth/pull/134' target='_blank'>PR link</a>
