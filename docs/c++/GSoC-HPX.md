---
sidebar_position: 1
---

# GSoC @ HPX, STE||AR Group

- [GSoC Project Acceptance Page](https://summerofcode.withgoogle.com/programs/2022/projects/YXhhTBJw)
- Project Title: Coroutine-like interface

Mentors (STE||AR Group @ LSU)
1. Dr. Hartmut Kaiser, Adjunct Professor @ LSU
2. Giannis Gonidelis, RA @ LSU

## Abstract

HPX being up to date with Std C++ Proposals, Senders/Receivers were implemented as per P2300. But they have been missing coroutine (co_await) integration and minor functionalities as described in P2300 which is likely to be accepted. Hence I plan to implement these functionalities within the Core HPX Library. 
- Benefits: 
    - Coroutines introduce better async code. For example, it is more readable, local variables have the same lifespan as the coroutine which means we don’t need to worry about allocation/release. 
    - S/R algorithms can work with coroutines which they cannot as of now unless relied on futures which as mentioned are single-time use. 
    - Adding co_await support makes the code more structured with respect to concurrency which can also be done by library abstractions of callbacks but using co_await may make it more optimized.


## Brief Summary

- Senders, and Receivers
    - Because it makes a more consistent programming model considering async programming types i.e. Parallelism and Concurrency. It standardizes the terminologies and execution policies which are more generic and reduce redundancy.
    - Coroutines have a direct connection between Senders and Coroutine Awaitables.

- Futures
    - One of the points of S/R is to avoid the allocations associated with futures, also, futures are single-use, whereas S/R, in general, can be used (started) multiple times. - Dr. H. Kaiser


Goal is to enable all Sender CPOs to do the following:
- If we write a sender and pass it to a function which could be a coroutine that could co_await that sender and get its result.
- If they are not generally awaitable then we can await transform them (i.e. make them awaitable).


## Work

My PRs can be found using [this](https://github.com/STEllAR-GROUP/hpx/pulls?q=is%3Apr+author%3ASAtacker) link as it'll always be updated.

Following are the Merged PRs until now:

- [[execution] Add schedule_result_t alias template](https://github.com/STEllAR-GROUP/hpx/pull/5846)
- [[hpx::execution] Added forwarding_scheduler_query](https://github.com/STEllAR-GROUP/hpx/pull/5865)
- [[P2300] enhancements: receiver_of, sender_of improvements](https://github.com/STEllAR-GROUP/hpx/pull/5920)
- [[P2300] Added fundamental coroutine_traits for S/R](https://github.com/STEllAR-GROUP/hpx/pull/5945)


With coroutine traits completed, my remaining work is the following:

1. Adapt `get_completion_signatures` when Sender is a awaitable
2. Utility `as_awaitable_t`
    - `receiver_base`, `sender_awaitable_base` 
    - to transform an object into one that is awaitable within a particular coroutine.
3. promise base for 5.
4. operation base for 5.
5. Utility `connect_awaitable` to adapt `connect` mentioned in [spec](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2022/p2300r5.html#spec-execution.senders.connect) 2.2
6. Utility `with_awaitable_senders`  
    - Used as the base class of a coroutine promise type, makes senders awaitable in that coroutine type


## References

- [P2300](https://wg21.link/P2300)
