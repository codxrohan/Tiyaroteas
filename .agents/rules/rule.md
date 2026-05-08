---
trigger: always_on
---

1. The Principle of "Zero-Mass" Architecture
Before writing code, the IDE must validate that the proposed solution is the "lightest" possible path.

Tree-Shaking First: Never import a full library (e.g., lodash or lucide-react) if a native TypeScript function or a targeted sub-import can do the job.

Dependency Audit: For every new package, the IDE must output a "Mass Report" in the terminal showing the estimated bundle size impact. If it exceeds 50KB, it must suggest a lighter alternative.

2. The Designer’s Constraint (CSS & UI)
The IDE is prohibited from using static pixel values for layout. It must think in Fluidity.

Fluid Scaling: All spacing and typography must use clamp() or rem. Fixed px values are considered "Gravity" and must be refactored.

Hardware-First Motion: Any transition or animation must be defined using transform or opacity. The IDE is forbidden from animating height, width, top, or left as these cause "Layout Heavy" repaints.

The 60FPS Rule: All JavaScript-driven animations must be wrapped in requestAnimationFrame or utilize a dedicated physics engine (GSAP/Framer Motion) with layout={false} to avoid DOM thrashing.

3. The TypeScript "Strict-Orbit" Protocol
Types are not suggestions; they are the physical laws of the site.

No any Ever: The IDE must treat any as a system failure. Every data structure must have a defined interface before implementation.

Atomic Components: Logic and View must be decoupled. The IDE must write "Pure Components" that accept props and emit events, ensuring the "state gravity" doesn't collapse the architecture.

4. The Shell & Automation Guardrails
The IDE must maintain the "Launchpad" (environment) with zero friction.

Pre-Commit Scrub: Before a "Save" or "Commit," the IDE must automatically run a Shell script to:

Remove unused imports.

Check for duplicate CSS classes.

Optimize any local image assets (WebP conversion).

One-Command Lift-off: The IDE must ensure the project can be built and deployed via a single npm run deploy or sh publish.sh command.

🛠️ The "Pre-Flight" Checklist
Configure the Google Antigravity IDE to output this checklist in the chat before it starts generating a file:

Mass Check: Is this the most lightweight way to solve this?

Fluidity Check: Are we using relative units and GPU-accelerated motion?

Type Check: Are all interfaces defined for this feature?

Friction Check: Does this code introduce technical debt or unnecessary dependencies?

💎 The Developer Mantra
"Code is a burden. The best developer writes the least amount of code to achieve the most powerful effect. If the code is invisible, the design can fly."