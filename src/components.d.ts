/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FauxGrid {
    }
    interface FauxGridItem {
    }
    interface FauxInner {
    }
    interface FauxMarkup {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLFauxGridElement extends Components.FauxGrid, HTMLStencilElement {
    }
    var HTMLFauxGridElement: {
        prototype: HTMLFauxGridElement;
        new (): HTMLFauxGridElement;
    };
    interface HTMLFauxGridItemElement extends Components.FauxGridItem, HTMLStencilElement {
    }
    var HTMLFauxGridItemElement: {
        prototype: HTMLFauxGridItemElement;
        new (): HTMLFauxGridItemElement;
    };
    interface HTMLFauxInnerElement extends Components.FauxInner, HTMLStencilElement {
    }
    var HTMLFauxInnerElement: {
        prototype: HTMLFauxInnerElement;
        new (): HTMLFauxInnerElement;
    };
    interface HTMLFauxMarkupElement extends Components.FauxMarkup, HTMLStencilElement {
    }
    var HTMLFauxMarkupElement: {
        prototype: HTMLFauxMarkupElement;
        new (): HTMLFauxMarkupElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "faux-grid": HTMLFauxGridElement;
        "faux-grid-item": HTMLFauxGridItemElement;
        "faux-inner": HTMLFauxInnerElement;
        "faux-markup": HTMLFauxMarkupElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface FauxGrid {
    }
    interface FauxGridItem {
    }
    interface FauxInner {
    }
    interface FauxMarkup {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "faux-grid": FauxGrid;
        "faux-grid-item": FauxGridItem;
        "faux-inner": FauxInner;
        "faux-markup": FauxMarkup;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "faux-grid": LocalJSX.FauxGrid & JSXBase.HTMLAttributes<HTMLFauxGridElement>;
            "faux-grid-item": LocalJSX.FauxGridItem & JSXBase.HTMLAttributes<HTMLFauxGridItemElement>;
            "faux-inner": LocalJSX.FauxInner & JSXBase.HTMLAttributes<HTMLFauxInnerElement>;
            "faux-markup": LocalJSX.FauxMarkup & JSXBase.HTMLAttributes<HTMLFauxMarkupElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
