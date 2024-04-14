"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call } from "@stream-io/video-react-sdk";

export const UpcamingMeeting = () => {
    const { upcomingCalls } = useGetCalls();

    const getCalls = () => upcomingCalls;
    const calls = getCalls();

    return (
        <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at:{" "}
            {calls && calls.length > 0 ? (calls?.[0] as Call).state.startsAt?.toLocaleString()?.split(",")[1] : "Upcoming Meeting at: 12:30 PM"}
        </h2>
    );
};
