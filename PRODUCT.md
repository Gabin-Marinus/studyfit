# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
University students preparing for exams. They juggle lectures, deadlines and often a part-time job, and many have tried generic study advice that didn't fit them. Some have ADHD, dyslexia or anxiety. The job: get a realistic study plan for an upcoming exam without spending time building it themselves.

## Product Purpose
StudyFit is an AI study coach. It interviews the student about how they actually study, then builds a personal study plan from those answers. Success: the student finishes the interview, gets a plan they believe in, and comes back to use it.

## Positioning
The plan is built from a structured interview about the student's own habits (focus span, sharpest time of day, distractions, what worked before), and every choice in the plan cites the answer it came from. It is meant to adapt as the student reports how sessions went. A generic planner has no interview; a general chatbot has no structured intake or plan.

## Operating Context
- Entry: landing page → "Start my interview" creates a chat.
- Interview: a chat with the coach. Ten intake questions, one at a time, any can be skipped; then a 4–6 line summary for confirmation; then the plan (session length, best times, 3 techniques, what to stop doing, sample week).
- Replies are plain text (no Markdown) and can be long once the plan arrives.
- After the plan, the chat continues as general study help.

## Capabilities and Constraints
- Rails 8.1, Propshaft, importmap, Turbo, Stimulus. No JS build step.
- LLM: Gemini via RubyLLM. Replies are synchronous (form post → redirect), so a send takes several seconds with no streaming today.
- Models: Chat (title), Message (role: user/assistant, content). No accounts yet.
- AI errors surface as a flash alert on the chat page.
- Not yet built: session check-ins and plan adaptation (claimed on the homepage as how it works).
- Redesign scope (confirmed 2026-11-28): keep the same concept and features; change the look.

## Brand Commitments
- Name: StudyFit.
- Voice: plain, encouraging, direct. Coach tone is chosen by the student (strict, friendly, or straight to the point).
- The user wants the product to feel premium, refined and smooth, while staying simple and straightforward to use.

## Evidence on Hand
No testimonials, user counts, university partnerships or outcome data exist. Do not fabricate any.

## Product Principles
1. The interview is the product. Nothing should stand between the student and starting it.
2. Every plan choice is traceable to something the student said.
3. Research-backed methods only (active recall, spaced repetition, practice tests, breaks); never learning styles.
4. Respectful of neurodivergent students: adapt, never diagnose.
5. Simple over clever: one obvious next action on every screen.

## Accessibility & Inclusion
Users include students with dyslexia, ADHD and anxiety: high legibility, calm pacing, no distracting motion, generous line length limits, WCAG AA contrast.
