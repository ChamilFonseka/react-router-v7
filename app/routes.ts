import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./landing/layout.tsx", [
        index("landing/home.tsx"),
        route("about", "./landing/about.tsx"),
    ]),
] satisfies RouteConfig;
