import React from "react";
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import OnlineUsers from "./OnlineUsers";

configure({adapter: new Adapter()})

describe("OnlineUsers", () => {
  let props
  let mountedOnlineUsers
  const onlineUsers = () => {
    if (!mountedOnlineUsers) {
      mountedOnlineUsers = mount(
        <OnlineUsers {...props} />
      )
    }
    return mountedOnlineUsers
  }

  beforeEach(() => {
    props = {
      toggle: undefined,
      users: undefined,
    };
    mountedOnlineUsers = undefined;
  });

  it("always renders a div", () => {
    const divs = onlineUsers().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  // describe("the rendered div", () => {
  //   it("contains everything else that gets rendered", () => {
  //     const divs = onlineUsers().find("div");
  //     // When using .find, enzyme arranges the nodes in order such
  //     // that the outermost node is first in the list. So we can
  //     // use .first() to get the outermost div.
  //     const wrappingDiv = divs.first();

  //     // Enzyme omits the outermost node when using the .children()
  //     // method on onlineUsers(). This is annoying, but we can use it
  //     // to verify that wrappingDiv contains everything else this
  //     // component renders.
  //     expect(wrappingDiv.children()).toEqual(onlineUsers().children());
  //   });
  // });

  // it("always renders a `ClockDisplay`", () => {
  //   expect(onlineUsers().find(ClockDisplay).length).toBe(1);
  // });

  // describe("rendered `ClockDisplay`", () => {
  //   it("does not receive any props", () => {
  //     const clockDisplay = onlineUsers().find(ClockDisplay);
  //     expect(Object.keys(clockDisplay.props()).length).toBe(0);
  //   });
  // });

  // it("always renders a `SlideToUnlock`", () => {
  //   expect(onlineUsers().find(SlideToUnlock).length).toBe(1);
  // });

  // describe("when `onUnlocked` is defined", () => {
  //   beforeEach(() => {
  //     props.onUnlocked = jest.fn();
  //   });

  //   it("sets the rendered `SlideToUnlock`'s `onSlide` prop to the same value as `onUnlocked`'", () => {
  //     const slideToUnlock = onlineUsers().find(SlideToUnlock);
  //     expect(slideToUnlock.props().onSlide).toBe(props.onUnlocked);
  //   });
  // });

  // describe("when `onUnlocked` is undefined", () => {
  //   beforeEach(() => {
  //     props.onUnlocked = undefined;
  //   });

  //   it("sets the rendered `SlideToUnlock`'s `onSlide` prop to undefined'", () => {
  //     const slideToUnlock = onlineUsers().find(SlideToUnlock);
  //     expect(slideToUnlock.props().onSlide).not.toBeDefined();
  //   });
  // });

  // describe("when `wallpaperPath` is passed", () => {
  //   beforeEach(() => {
  //     props.wallpaperPath = "some/image.png";
  //   });

  //   it("applies that wallpaper as a background-image on the wrapping div", () => {
  //     const wrappingDiv = onlineUsers().find("div").first();
  //     expect(wrappingDiv.props().style.backgroundImage).toBe(`url(${props.wallpaperPath})`);
  //   });
  // });

  // describe("when `userInfoMessage` is passed", () => {
  //   beforeEach(() => {
  //     props.userInfoMessage = "This is my favorite phone!";
  //   });

  //   it("renders a `TopOverlay`", () => {
  //     expect(onlineUsers().find(TopOverlay).length).toBe(1);
  //   });

  //   it("passes `userInfoMessage` to the rendered `TopOverlay` as `children`", () => {
  //     const topOverlay = onlineUsers().find(TopOverlay);
  //     expect(topOverlay.props().children).toBe(props.userInfoMessage);
  //   });
  // });

  // describe("when `userInfoMessage` is undefined", () => {
  //   beforeEach(() => {
  //     props.userInfoMessage = undefined;
  //   });

  //   it("does not render a `TopOverlay`", () => {
  //     expect(onlineUsers().find(TopOverlay).length).toBe(0);
  //   });
  // });
})