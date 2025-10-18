import { matriSammanEvent } from "./matri-samman"
import { forumOfDiplomacyEvent } from "./forum-of-diplomacy"
import { secretaryEvent } from "./secretary-event"
import { treasurerEvent } from "./treasurer-event"
import { event3 } from "./event-3"
import { event4 } from "./event-4"
import { event5 } from "./event-5"
import { fod } from "./fod"
import { matriSammanBannerLaunch } from "./matri-samman-banner-launch"
import { lifeBeyondCancerDonation } from "./life-beyond-cancer-donation"

export const allEvents = {
  "matri-samman": matriSammanEvent,
  "forum-of-diplomacy": forumOfDiplomacyEvent,
  "the-secretary": secretaryEvent,
  "the-treasurer": treasurerEvent,
  "rotary-youth-leadership-awards-ryla-2025": event3,
  "ryla-2025": event3, // Shorter alias
  "event-3": event3, // Backward compatibility
  agomoni: event4,
  "event-4": event4, // Backward compatibility
  kritagyata: event5,
  "event-5": event5, // Backward compatibility
  fod: fod,
  "matri-samman-banner-launch": matriSammanBannerLaunch,
  "life-beyond-cancer-donation": lifeBeyondCancerDonation,
}

export type EventSlug = keyof typeof allEvents

export function getEventBySlug(slug: string) {
  return allEvents[slug as EventSlug] || null
}

export function getAllEventSlugs() {
  return Object.keys(allEvents)
}
