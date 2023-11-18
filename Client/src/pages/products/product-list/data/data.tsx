import {
  CheckCircledIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "in progress",
    label: "درحال کار",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "انجام شده",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "لغو شده",
    icon: CrossCircledIcon,
  },
];
