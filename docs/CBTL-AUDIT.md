# Concept-Based audit: HS Earth & Environmental Science

**Framework:** Erickson, Lanning & French, *Concept-Based Curriculum and Instruction for the Thinking Classroom* (2nd ed., 2017).
**Audited:** Units 0 to 4, as published at https://hs-earth-env-site.vercel.app/ and in `src/` at this commit.
**Date:** 27 August 2026.

**What this audits.** The visible curriculum: unit pages, block pages, assessment pages, and the Foundations layer. It does not audit teaching. A course can be concept-based in the room and silent about it on the page, and a large part of what follows is exactly that finding.

---

## Scope, and why it stops at Unit 4

Units 0 to 4 carry the full learning panel on every block. Units 5 and 6 carry none of it on any block.

| | U0 | U1 | U2 | U3 | U4 | U5 | U6 | U7 |
|---|---|---|---|---|---|---|---|---|
| Blocks | 7 | 10 | 9 | 12 | 12 | 9 | 10 | 0 |
| Learning intentions | 7/7 | 10/10 | 9/9 | 12/12 | 12/12 | **0/9** | **0/10** | n/a |
| Success criteria | 7/7 | 10/10 | 9/9 | 12/12 | 12/12 | **0/9** | **0/10** | n/a |
| Standards tags | 7/7 | 10/10 | 9/9 | 12/12 | 12/12 | **0/9** | **0/10** | n/a |
| Bell ringers | 7/7 | 10/10 | 9/9 | 12/12 | 12/12 | **0/9** | **0/10** | n/a |

Units 5 and 6 are taught and both have conceptually serious summatives. But auditing a unit's conceptual spine means reading what the unit states about its own purpose, block by block, and those 19 blocks state nothing. Auditing them now would mean inferring intent from activity lists, which is the opposite of what this exercise is for.

**Unit 7 does not exist.** It is listed on the units index, previewed at the close of Unit 6, and has 14 EAL vocabulary terms written for it. There is no unit directory, no block, and no assessment. The home page advertises "All eight units."

---

## 1. Audit

EXPLICIT = stated on the site. IMPLICIT = the design does it, the site never names it. ABSENT = not present in design or statement.

| CBTL element | U0 | U1 | U2 | U3 | U4 |
|---|---|---|---|---|---|
| Macro-concepts | IMPLICIT | IMPLICIT | IMPLICIT | IMPLICIT | IMPLICIT |
| Micro-concepts | EXPLICIT | EXPLICIT | EXPLICIT | EXPLICIT | EXPLICIT |
| Conceptual understandings | ABSENT | ABSENT | ABSENT | ABSENT | ABSENT |
| Guiding questions, typed | ABSENT | ABSENT | ABSENT | ABSENT | ABSENT |
| Guiding questions, untyped | EXPLICIT | EXPLICIT | EXPLICIT | EXPLICIT | EXPLICIT |
| Synergistic thinking | IMPLICIT | IMPLICIT | IMPLICIT | IMPLICIT | IMPLICIT |
| Transfer tasks | IMPLICIT | IMPLICIT | IMPLICIT | IMPLICIT | IMPLICIT |

The pattern is uniform, which is itself the finding. This is not a course that is conceptual in some units and activity-driven in others. It is a course that is conceptual throughout and says so nowhere.

### Macro-concepts: IMPLICIT, and the existing attempt is broken

The site has a "Thread" system, which is the closest thing to a macro-concept layer. It appears **four times in the entire site**:

- `unit-1/index.njk`: "Thread 2: Systems Thinking"
- `unit-2/index.njk`: "Thread 4: Science-Policy-Public" and "Thread 1: OPVL"
- `unit-4/index.njk`: "Thread 4: Climate Action"

Thread 3 is never cited by number anywhere. Thread 4 is used for two different things.

**Then the Welcome page turns out to name all four**, in prose, without numbers: OPVL and AI Documentation, systems thinking, engineering design, and science, policy and the public. Read against the numbered mentions, the order matches exactly, so Thread 3 is engineering design and always was. Nothing had to be invented; the two halves of the system had simply never been introduced to each other.

So the macro-concept layer exists and is coherent. What was missing was a page where it is stated, and any reference to it from the unit pages beyond four scattered mentions, one of which carried the wrong name.

### Micro-concepts: EXPLICIT

Every block page carries a Concepts section. The EAL layer defines terms per unit with definitions, visual cues, and sentence stems, and a master vocabulary page carries translations. Tap-to-define chips resolve inline on reading pages. This is the strongest-served element in the audit and needs nothing.

### Conceptual understandings: ABSENT as apparatus, present in prose

**Not one conceptual understanding is stated as such anywhere on the site.**

They exist in the writing, unlabeled. Two examples, both currently functioning as passing remarks:

- Unit 6 Block 10: *"real design has no win-everything answer, and honest work names what it gave up."* That is Erickson generalization form almost exactly, sitting mid-paragraph in a debrief.
- Unit 1 Block 7: *"Asking what breaks when a criterion is absent is asking which feedback loop unwinds."*

A student who reads carefully can extract the conceptual layer. A student who does not, cannot, and neither can a colleague picking up the course.

### Guiding questions: EXPLICIT but untyped

Every unit index carries an **Anchor question** callout, and they are good questions:

| Unit | Anchor question |
|---|---|
| 0 | How do scientists know what they know, and how should we know what we know? |
| 1 | Is Earth special, or is it one of many habitable planets we just haven't found yet? |
| 2 | What story does a landscape tell, and how do you read it like a geologist? |
| 3 | How do you build for a planet that occasionally tries to destroy what you've built? |
| 4 | What does Chennai do about climate change, and what does the science say is worth doing? |

Read against Erickson's typology, U0 and U2 are conceptual, U1 and U3 are debatable, and U4 is a compound of conceptual and debatable. None is labeled, none has a factual counterpart stated, and each sits alone rather than in a set that moves a student from fact to concept to argument.

There is also a **course-level question**, *"How do you live well on a changing Earth?"*, which appears exactly once, in the Story section of Unit 0 Block 1, and nowhere else. The course has an anchoring question for the year and states it in one paragraph on one page.

### Synergistic thinking: IMPLICIT and strong

This is where the course is most obviously concept-based in function.

- **GRASPS framing on every summative.** Goal, Role, Audience, Situation, Product, Standards, stated as a table on each assessment page. Students are always operating in a role for an audience, not answering a prompt.
- **OPVL at rising difficulty.** U0 news and papers, U1 planetary data and AI explanations, U2 government geological data where the Limitation is a property of survey date and method, U4 IPCC projections and confidence language. The lens is constant; the factual terrain changes underneath it, which is the interplay the framework asks for.
- **The Unit 1 framework template.** Five fields per criterion, the fifth being "where it can fail." The site itself names this as the systems-thinking move in disguise.
- **Unit 3's iteration cycle.** Predict, run, reflect, three times, with case studies used as evidence to defend or revise a claim rather than as content to recall.

### Transfer tasks: IMPLICIT and strong

Every unit ends in a novel-context task with a real audience role: a peer NASA committee, a Greater Chennai Corporation planning meeting, an engineering defense panel, a Policy Panel. Unit 1's habitability framework is built on Earth and Mars and then applied to an exoplanet the student chooses and the teacher has not seen, which is transfer in the strict sense.

**Terminology caution.** The word "transfer" appears in 27 files, but almost entirely as the name of the T/T strand, "Thinking & Transfer." The site does not describe any task as a transfer task. Anyone grepping for evidence of transfer will find a rubric label, not a design principle.

---

## 2. Naming the implicit

Erickson generalization form: one sentence, no proper nouns, third person, present tense. Drafted from what each unit already does, not from what it could do.

### Unit 0: Scientific Practices and Class Foundations

1. The reliability of a claim depends on the conditions under which it was produced, not on how confident it sounds.
2. Disagreement among informed sources marks where evidence is incomplete or where values differ, rather than where someone is simply wrong.
3. A tool that produces fluent language is a source like any other, and recording how it was used is what turns its output into evidence a reader can weigh.

### Unit 1: Earth and Universe

1. Habitability emerges from interactions among a world's systems rather than from any single condition.
2. A framework built from known cases becomes an instrument for judging cases its maker has never seen.
3. Asking where a condition fails reveals the system that holds it in place.

### Unit 2: Surface Processes

1. Present landforms record the processes that produced them, so a landscape can be read as evidence of its own history.
2. Processes too slow to notice accumulate into the features that constrain what people can build and where.
3. The limitations of a measurement are properties of how and when it was taken, not flaws in the thing measured.

### Unit 3: Plate Tectonics and Natural Hazards

1. A hazard becomes a disaster through the choices a society makes about where and how it builds.
2. Designing under a fixed budget allocates limited protection against uncertain events, so every design encodes a judgment about which losses are acceptable.
3. The same structure performs differently in different settings, so a design can only be judged against the conditions it will actually meet.

### Unit 4: Atmosphere and Climate

1. A projection states what follows from a stated set of assumptions, so its worth depends on those assumptions being visible and challengeable.
2. A model is a simplification chosen on purpose, and knowing what it leaves out is what makes its output usable.
3. A response to a systemic problem either reduces its cause or absorbs its effect, and the level at which a decision is made determines which of those is available.

### Course level

*Living well on a changing Earth requires deciding what to trust, what to protect, and what to give up.*

That is the generalization the year's existing question implies. The question is already written; the understanding it points at is not.

---

## 3. What is absent

Stated plainly. No understandings have been invented to fill these.

1. **No conceptual understanding is stated anywhere on the site.** Not one, in any unit, at any level.
2. **No guiding question is typed.** The anchor questions are strong and unlabeled, and none has a factual or debatable companion stated beside it.
3. **The macro-concept layer is stated in one place and cited in four, with an error.** The Welcome page names all four threads in prose; the unit pages cite them by number four times in total, one of them under the wrong name. Thread 3 is never cited at all. No page connected the two until now.
4. **The course-level question appears once**, in a single block's Story paragraph, and is never repeated on the home page, the units index, or any unit page.
5. **The Map dashboard covers one unit in eight.** `unitSpine.json` holds a single entry, `u0`. The view that makes "what each block feeds" visible, which is the clearest existing rendering of a conceptual build, exists for Unit 0 only.
6. **Units 5 and 6 state no intention, criteria, or standard on any of their 19 blocks.** Their summatives are conceptually strong; their daily pages are activity lists. This is a real gap, not a documentation preference.
7. **Unit 7 is advertised and does not exist.**

**Not claimed:** that Units 5 and 6 lack a conceptual spine. They were not audited, because the evidence needed to audit them fairly is the evidence that is missing.

---

## 4. What changed on the site

Minimal by design. No unit title, task, or assessment was altered. No assessment was added. Nothing changed what students do this month.

**A. Conceptual understanding and typed guiding questions on Units 0 to 4.** A second callout beside each existing Anchor question, carrying the unit's conceptual understanding and three questions labeled factual, conceptual, and debatable. The Anchor question is untouched.

**B. One conceptual question in each defense.** Added to the defense section of each U0-U4 assessment page. Students already defend; they now have one question in front of them that cannot be answered by reciting the unit's content.

**C. A new Foundations page, "The Conceptual Architecture."** Names the macro-concepts, states the course-level question and understanding, lists the conceptual understandings for U0-U4 in one place, and says plainly that U5 to U7 are not yet covered.

**D. The Thread collision fixed, against the naming that already existed.** Unit 4's "Thread 4: Climate Action" now reads Thread 4: Science, policy, and the public, since climate action is that thread's Unit 4 instance rather than a fifth thread. All four unit-page citations now use the Welcome page's wording verbatim. **Thread 3 needed no new name: it is engineering design**, third in the Welcome page's list, matching the existing numbering.

The eight defenses are recorded as the structure the threads are tested in, not as a fifth thread, because promoting them is the obvious mistake and the Welcome page does not make it.

**What was deliberately not done:** the 6-category defense question banks live in Google Classroom handouts, not in this repo, so they could not be edited here. Adding a conceptual category to those banks is a separate, and probably worthwhile, job.

---

## 5. Summary

**What was already concept-based in function.** The course transfers by design and has done so from the start. Students build a habitability framework from cases they are taught and apply it to a case nobody has taught them. One analytical lens, OPVL, runs from Unit 0 to Unit 4 across news, papers, AI output, planetary data, government geological surveys, and IPCC projections, getting harder each time while staying recognizably the same move. Every summative uses GRASPS framing and puts the student in a role in front of an audience. Every unit lands in a place-based Chennai task with a genuine decision at stake. Unit 3 makes students defend engineering choices against historical evidence; Unit 4 makes them separate what a model says from what its assumptions assume. This is synergistic thinking in Erickson's sense, and it was built before anyone used the phrase.

**What was missing was the apparatus, not the thinking.** Not one conceptual understanding was stated anywhere on the site. No guiding question was typed. The macro-concept layer had been attempted twice and abandoned twice, leaving four orphan mentions with a numbering collision. The course's own year-long question appeared in exactly one paragraph. A colleague inheriting this course, or a student trying to see the architecture, would have had to reconstruct all of it from activity descriptions.

**What we named.** Fifteen conceptual understandings across Units 0 to 4, two to three per unit, drafted from each unit's own prose and assessments rather than imported. One course-level understanding, derived from the year question that was already written. Three typed guiding questions per unit, built around the anchor questions that already existed.

**What we did not have to name.** The four macro-concepts were already written, on the Welcome page, in prose. The audit's first draft proposed a name for Thread 3 before finding them, and was wrong: Thread 3 is engineering design, and the numbering on the unit pages already matched the Welcome page's order. The fix was reconciliation, not invention, which is the better outcome and worth recording as such.

**What remains absent, and is not papered over.** Units 5 and 6 carry no learning intention, success criteria, standards tag, or bell ringer on any of their 19 blocks, so their conceptual spine was not audited and no understandings were drafted for them. Unit 7 has no blocks and no assessment while the site advertises eight units. The Map dashboard that shows how blocks feed a summative exists for Unit 0 alone. These are named here because an audit that reported only what could be fixed in one pass would not be worth quoting.

**The honest headline.** This was a concept-based course with no concept-based documentation. The audit changed the documentation and left the course alone, which is the correct order. What it did not do is make Units 5 to 7 into something they are not yet.

---

*Prepared with Claude Code. The generalizations are drafts for teacher review, not settled curriculum: they were written from the site's own language and should be checked against what is actually taught before they harden.*
