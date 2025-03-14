import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../../ui/button";

interface DrawerInterface {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}
export function StatusSelectDrawer({ open, setOpen, status, setStatus }: DrawerInterface) {
    const changeStatus = () => {
        setStatus("absent")
    }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      {/* <DrawerTrigger>Open</DrawerTrigger> */}
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Select anyone to change the status?</DrawerTitle>
          <DrawerDescription>
            <RadioGroup defaultValue={status} onChange={changeStatus}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="present" id="option-one"/>
                <Label htmlFor="option-one">Present</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="absent" id="option-two" />
                <Label htmlFor="option-two">Absent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="leave" id="option-two" />
                <Label htmlFor="option-two">Leave</Label>
              </div>
            </RadioGroup>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
