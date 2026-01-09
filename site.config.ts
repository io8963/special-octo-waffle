import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "Data Li",
	prologue: "This is a test text.",
	author: {
		name: "Data Li",
		email: "hi@your.mail",
		link: "https://test.mydatali.com"
	},
	description: "这是一段网站内容的简要概述.",
	copyright: {
		type: "CC BY-NC-SA 4.0",
		year: "2026"
	},
	i18n: {
		locales: ["zh-cn"],
		defaultLocale: "zh-cn"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
