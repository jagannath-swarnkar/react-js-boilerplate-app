/*eslint-disable */

import React, { useEffect, useState } from "react";
const around = (n, value) => {return value >= n-5 && value<= n+5}
/**
 * @description this is a component to get pagination event
 * if scroll height of a container is equal to scrollTop & clientHeight
 * then this component will raise an event provided in props (pageEventHandler)
 * provide the html element id of scrollable container (make sure that element exists in View Port)
 * @author Jagannath
 * @date 2021-01-18
 * @param id: HTMLElement, 
 * @param totalData: Array[], 
 * @param totalCount: Number
 * @param pageEventHandler: f()
 */
const PaginationIndicator = (props) => {
  const { id, totalData, totalCount, pageEventHandler, elementRef, ...others } = props;
  const [pageChange, setPageChange] = useState(0);

  useEffect(() => {
    const elementNode = document.getElementById(id) || elementRef && elementRef.current;
    // console.log('elementNode', elementNode)
    console.info('')
    if (elementNode) {
      elementNode.addEventListener("scroll", () => {
        const isScrollTouchingBottom = around(parseInt(elementNode.scrollHeight), parseInt(elementNode.scrollTop) + parseInt(elementNode.clientHeight));
        if (isScrollTouchingBottom) { setPageChange(Math.random()) }
      });
    }
    
  }, []);

  useEffect(() => {
    const elementNode = document.getElementById(id) || elementRef && elementRef.current;
    if (elementNode) {
        const isScrollTouchingBottom = around(parseInt(elementNode.scrollHeight), parseInt(elementNode.scrollTop) + parseInt(elementNode.clientHeight));
        if (isScrollTouchingBottom) { 
          if(totalData && totalCount && totalData.length < totalCount){
              pageEventHandler && pageEventHandler();
          }else{
              pageEventHandler && pageEventHandler()
          }
        }

    }
  }, [pageChange]);

  useEffect(()=>{
    return ()=>{
      const elementNode = document.getElementById(id) || elementRef && elementRef.current;
      if(elementNode){
        elementNode.removeEventListener('scroll', ()=>null)
      }
    }
  },[])
  return <div {...others}>{props.children}</div>;
};
export default PaginationIndicator;
