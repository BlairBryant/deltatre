import React from "react";
import renderer from 'react-test-renderer'
import OnlineUsers from "./OnlineUsers";

test('Online Users', () => {
    const component = renderer.create(
      <OnlineUsers toggle={true} users={[]}/>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    
})