import React from "react";
import {create} from "react-test-renderer"
import PersonalStatus from "./PersonalStatus";

describe("PersonalStatus component", ()=> {
  test("Status from props should be in the state", () => {
    const component = create(<PersonalStatus status="it-kamasutra testing"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra testing");
  });

  test("After creation p should be displayed", () => {
    const component = create(<PersonalStatus status="it-kamasutra testing"/>);
    const root = component.root;
    let p = root.findByType("p");
    expect(p).not.toBeNull();
  });

  test("After creation p should containe status", () => {
    const component = create(<PersonalStatus status="it-kamasutra testing"/>);
    const root = component.root;
    let p = root.findByType("p");
    expect(p.children[0]).toBe("it-kamasutra testing");
  });

  test("After creation input should not be displayed", () => {
    const component = create(<PersonalStatus status="it-kamasutra testing"/>);
    const root = component.root;
    
    expect(()=> {
      let input = root.findByType("input");
    }).toThrow();
  });


  test("Input should be displayed in editMode", () => {
    const component = create(<PersonalStatus status="it-kamasutra testing"/>);
    const root = component.root;
    let p = root.findByType("p"); 
    p.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("it-kamasutra testing");
  });

  test("Callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<PersonalStatus status="it-kamasutra testing" updateStatus = {mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });


});