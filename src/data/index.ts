import { AccordionType } from "../types";

export const initialAccordions: AccordionType[] = [
	{
		id: 1,
		title: "What is an Accordion?",
		content:
			"An accordion is a vertically stacked list of headers that users can click on to reveal more information about a business. With an accordion, when someone visits your web page, they will see a list of headers.",
		isOpen: false,
	},
	{
		id: 2,
		title: "Is it good to use Tailwind with React?",
		content:
			"The integration of Tailwind CSS with React Native empowers software development teams to rapidly and consistently build responsive and accessible applications.",
		isOpen: false,
	},
	{
		id: 3,
		title: "Why you need TypeScript in your React app?",
		content:
			"TypeScript provides a type system that allows developers to catch type-related errors at compile time rather than at runtime. This feature makes it easier to write and maintain high-quality code. For example, in a React component, TypeScript can help catch errors related to the props and state of the component.",
		isOpen: false,
	},
];
