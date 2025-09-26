import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function ScheduleTable() {
    return (
        <div className="rounded-xl border overflow-hidden">
            <Table className="w-full table-fixed">
                <TableHeader>
                    <TableRow className="bg-[#4B9C8E]">
                        <TableHead
                            className="border-r align-top 
               w-24 sm:w-32 md:w-40 lg:w-48 
               whitespace-normal break-words"
                        >
                            Time
                        </TableHead>
                        <TableHead className="align-top whitespace-normal break-words">Event</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {/* Opening Remarks */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">5:15 – 6:00 PM</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">Opening Remark with Dr. Maryam Moosavi</TableCell>
                    </TableRow>

                    {/* Timeslot A */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">6:15 – 6:45 PM</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">Workshop Timeslot A</TableCell>
                    </TableRow>

                    {/* Timeslot B */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">6:45 – 7:15 PM</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">Workshop Timeslot B</TableCell>
                    </TableRow>

                    {/* Timeslot C */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">7:15 – 7:45 PM</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">Workshop Timeslot C</TableCell>
                    </TableRow>

                    {/* Networking */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">7:45 – 9:00 PM</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">Networking Session with club collaborators and industry sponsors, and speakers</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
