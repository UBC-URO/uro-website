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
                            Months
                        </TableHead>
                        <TableHead className="align-top whitespace-normal break-words">Timeline</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* September */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">September</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Sept 23:</span> Mentee Info Night <span className="italic">(at AMS Nest Great Hall South from 6–8 PM)</span>
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Sept 26 (11:59 PM):</span> Deadline for Mentee Applications
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* October */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">October</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Oct 1:</span> How to Mentor Workshop <span className="italic">(for mentors, 6–7 PM on Zoom)</span>
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Oct 10 (11:59 PM):</span> Deadline for mentors to rank mentees
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Oct 13th:</span> Matching results announced
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Mid–late Oct:</span>
                                    <ul className="mt-2 ml-6 list-[circle] space-y-1">
                                        <li>Introductory meetings between mentor &amp; mentees</li>
                                        <li>
                                            Mentee Professional Development (PD) workshop <span className="italic">(mandatory for matched mentees, on Zoom, date TBD)</span>
                                        </li>
                                        <li>
                                            How to Write a Research Question Workshop with Dr. Rick Gooding <span className="italic">(for mentees, on Zoom, date TBD)</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* November */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">November</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Nov 3:</span> How to Conduct a Literature Review Workshop with Katherine Miller and Anne Olsen{" "}
                                    <span className="italic">(for mentees, 6–7 PM on Zoom)</span>
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Nov 16:</span> Mentees submit their REX Research Question <span className="italic">(via Qualtrics)</span>
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Mid–late Nov:</span> MURC Presenter Application opens*
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* December */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">December</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Dec 2:</span> Mentees submit their REX Literature Review <span className="italic">(via Qualtrics)</span>
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Dec 8:</span> Deadline for REX Feedback Survey #1 <span className="italic">(for mentors and mentees)</span>
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* January */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">January</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Early Jan:</span> MURC Abstract Review Session*
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Mid Jan:</span> Deadline to apply to present at MURC 2026 and abstract submission*
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Jan 16:</span> REX Mentees submit their project methodology <span className="italic">(via Qualtrics)</span>
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Jan 26:</span> Deadline for REX Feedback Survey #2 <span className="italic">(for mentors and mentees)</span>
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* February */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">February</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">MURC Abstract Feedback Returned*</li>
                                <li className="list-disc list-inside">MURC Oral and Poster Presentation Workshops*</li>
                                <li className="list-disc list-inside">MURC Revised Abstract Resubmission*</li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* March */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">March</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Early–mid Mar:</span> MURC Slides or Poster Submission*
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Mar 21:</span> Present your poster or oral presentation at MURC
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Mar 23:</span> Deadline for REX Feedback Survey #3 <span className="italic">(for mentors and mentees)</span> and Mentor and
                                    Mentee(s) of the Year Nominations are released
                                </li>
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Mar 29:</span> Deadline for REX Award Nominations
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* April */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">April</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    <span className="font-semibold">Late Apr:</span> REX certificates sent out via email &amp; Mentor and Mentee(s) of the Year announced
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
