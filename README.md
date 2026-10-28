Redirects the old Salmon Waters address (alexaksn.github.io/salmon-waters/) to https://salmonwaters.ca, and replaces
the old offline worker (`salmon-waters/sw.js`) with one that removes itself, so browsers that kept it stop showing the
old copy. `404.html` catches every other old path under /salmon-waters/.
