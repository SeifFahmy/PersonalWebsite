# Personal Notes

These are notes I've written for myself over the course of making this project. To be transferred to notion and deleted at the end of the this project as it's not meant to be public on GitHub.

## 2023-12-25

### 3D Models Knowledge Summary

Preparing, using, and most importantly, making the 3D models look good has been very difficult. Not to mention, animating them and somehow adding those animations has also proven to be very difficult. There are whole teams full of designers who are dedicated to building these models, figuring out the optimal lighting, and so on to make the websites I like so much look good, so it's not surprising I'm finding this difficult. They also put a lot of work into optimising the models so they don't slow down performance, especially on mobile devices.

I've spent the past 3 days (~30h) working on making these models, and while I did make a lot of progress in understanding how it works given I started at 0 knowledge, I made little progress on the website and haven't made the model look good, be animated, or performant. I'm gonna figure out a new design for my website that doesn't rely on these models so much, but I've summarised what I've learnt here for reference:

-   Can use react three fiber (R3F) to turn models into react components, because using the three.js API directly doesn't work well with react.
-   Can implement animations and key frames into the models in blender, export them into a .glb file, then import that with R3F. The animations should be extractable using the `useGLTF()` hook:
    ```js
     const { nodes, materials, animations } = useGLTF(modelPath) as GLTFResult;
    ```
-   Creating these animations in blender can (likely) be difficult for me, so another option could be using [spline][1.1]. You can upload your .glb files there, then animating, adding effects, events, triggers, etc. and exporting them is surprisingly easy. They have lots of [tutorials][1.2] on their website, including one about [how a mouse click can trigger events and animations][1.3]. Can follow these tutorials to more easily add lights, effects, animations, and all that to your scenes to make them look good

-   It's easy to export the model _objects_ to R3F, however I haven't figured out how to export all the extra animations and stuff along with
    them. Clicking the export button when you have the spline model open lets you export the model to several options: vanilla JS, raw three.js, react component, or an R3F component. I tried the final option and like I said didn't figure out how to export animations (wasn't in the useSpline hook, the equivalent to useGLTF). They have docs for their [R3F spline library][1.4], which include example projects, but they provide essentially no explanation and create the animations in R3F + spring hooks, they don't extract them from the spline model. There are proper docs for their [react spline library][1.5] that explain how to get the events and animations out of a model and trigger them based on things like mouse hovers and clicks, so it could be worth ditching R3F and using spline, especially because it renders the scene exactly how you see it in the spline editor (lights, post processing, sounds, and everything). From what I've seen, it's common to use framer motion with it to animate scenes further.

[1.1]: https://app.spline.design/home
[1.2]: https://spline.design/tutorials
[1.3]: https://spline.design/tutorials/lJIDSiDlhvw-making-a-3d-switch-or-toggle-with-spline
[1.4]: https://github.com/splinetool/r3f-spline
[1.5]: https://github.com/splinetool/react-spline

### Inspiration Websites

I had gathered the below websites as inspirations, and was looking to see how can I alter my website design to rely less on 3D models for the reasons I outlined above (although spline is definitely something worth exploring as it seems like it could fix several of my problems):

-   [droplette](https://www.droplette.app)
-   [GSAP](https://gsap.com/showcase/)
-   [lief](https://liefamsterdam.nl)
-   [manifesto](http://manifesto.clapat.com)
-   [webflow](https://webflow.com)
-   [noomo](https://noomoagency.com)
-   [makepill](https://makepill.com/en)
-   [fromscout](https://fromscout.com)
-   [cydstumpel](https://cydstumpel.nl)
-   [hamishw](https://hamishw.com/#intro)
