This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Hosted Link

https://bite-speed-assignment-lb849ii4t-hrithiks-projects-a05d4764.vercel.app/

# Notes

- Didnt understand what to do by saving so after clicking **Save Changes** the workspace is saved to state.workflow.workflow array.

# Overview:

We’ll build a simple Chatbot flow builder using React and try to make the code extensible to easily add new features. 

A chatbot flow is built by connecting multiple messages together to decide the order of execution. 

*(double click on the images to enlarge)*

![Text node.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75974f28-7e11-4222-b99f-83ae626dc6b8/Text_node.jpeg)

#**Note →** 

- Use https://reactflow.dev/ for the flow builder.
- You are free to use any other library on top of React Flow.
- You can use either of JavaScript or TypeScript for this Task
- Add comments to explain your code

# Features:

1. **Text Node** 
    1. Our flow builder currently supports only one type of message (i.e Text Message).
    2. There can be multiple Text Nodes in one flow.
    3. Nodes are added to the flow by dragging and dropping a Node from the Nodes Panel.
2. **Nodes Panel** 
    1. This panel houses all kind of Nodes that our Flow Builder supports.
    2. Right now there is only Message Node, but we’d be adding more types of Nodes in the future so make this section extensible 
3. **Edge**
    1. Connects two Nodes together
4. **Source Handle**
    1. Source of a connecting edge 
    2. Can only have **one edge** originating from a source handle
5. **Target Handle** 
    1. Target of a connecting edge
    2. Can have **more than one edge** connecting to a target handle 
6. **Settings Panel**
    
    ![Settings panel.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/38e424e4-01cd-462b-a4af-29de9d2c404c/Settings_panel.jpeg)
    
    1. Settings Panel will replace the Nodes Panel when a Node is selected
    2. It has a text field to edit text of the selected Text Node
7. **Save Button**
    1. Button to save the flow 
    2. **Save button press will show an error if there are more than one Nodes and more than one Node has empty target handles** 
        
        ![Screenshot 2022-10-24 at 10.41.29 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b33c6166-aa3e-4c1a-b1b8-1dbd010e1e2e/Screenshot_2022-10-24_at_10.41.29_PM.png)
