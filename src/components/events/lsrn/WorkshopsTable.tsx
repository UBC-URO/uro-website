import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function WorkshopsTable() {
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
                        <TableHead className="align-top whitespace-normal break-words">Workshop</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {/* Timeslot A */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">Timeslot A: 6:15 – 6:45</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">Research Opportunities at ICORD</li>
                                <li className="list-disc list-inside">General Graduate Information</li>
                                <li className="list-disc list-inside">How to Network with LinkedIn as a Life Science Student</li>
                                <li className="list-disc list-inside">How to Approach Faculty</li>
                                <li className="list-disc list-inside">Research in Real World: Bridging Science and Society</li>
                                <li className="list-disc list-inside">
                                    Summer Research Opportunities: Centre for Blood Research<span className="italic">*</span>
                                </li>
                                <li className="list-disc list-inside">
                                    Summer Research Opportunities: Centre for Blood Research<span className="italic">*</span>
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* Timeslot B */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">Timeslot B: 6:45 – 7:15</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">How to Fund your Undergraduate Research: SSRP &amp; NSERC USRA Awards</li>
                                <li className="list-disc list-inside">
                                    Opportunities at BC Children’s Hospital<span className="italic">*</span>
                                </li>
                                <li className="list-disc list-inside">Intro to Bioinformatics: Life Science Meets Data</li>
                                <li className="list-disc list-inside">Canadian Journal Undergraduate Research Panel Workshop</li>
                                <li className="list-disc list-inside">STEMCELL Technologies: Academia to Industry</li>
                            </ul>
                        </TableCell>
                    </TableRow>

                    {/* Timeslot C */}
                    <TableRow>
                        <TableCell className="align-top font-semibold border-r whitespace-normal break-words">Timeslot C: 7:15 – 7:45</TableCell>
                        <TableCell className="align-top whitespace-normal break-words">
                            <ul className="space-y-2">
                                <li className="list-disc list-inside">
                                    Opportunities at BC Children’s Hospital<span className="italic">*</span>
                                </li>
                                <li className="list-disc list-inside">Research Abroad: Go Global</li>
                                <li className="list-disc list-inside">Navigating Biosafety in Undergraduate Lab Research</li>
                                <li className="list-disc list-inside">MD vs PhD vs MD/PhD</li>
                                <li className="list-disc list-inside">UBC Science Co-op</li>
                            </ul>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
