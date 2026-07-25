from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    Flowable,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "sample-doctor-report.pdf"

PRIMARY = colors.HexColor("#433371")
ACCENT = colors.HexColor("#5b4b8a")
SOFT_BG = colors.HexColor("#fdf8fe")
CARD_BG = colors.HexColor("#ffffff")
LINE = colors.HexColor("#cac4d1")
TEXT = colors.HexColor("#1c1b1f")
MUTED = colors.HexColor("#49454f")


class Rule(Flowable):
    def __init__(self, color=LINE, width=1):
        super().__init__()
        self.color = color
        self.width = width

    def wrap(self, avail_width, avail_height):
        self.avail_width = avail_width
        return avail_width, 0.08 * inch

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.width)
        self.canv.line(0, 0.04 * inch, self.avail_width, 0.04 * inch)


def paragraph_styles():
    styles = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "ZebraTitle",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=PRIMARY,
            spaceAfter=8,
        ),
        "subtitle": ParagraphStyle(
            "ZebraSubtitle",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=MUTED,
            spaceAfter=8,
        ),
        "sample": ParagraphStyle(
            "ZebraSample",
            parent=styles["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=13,
            textColor=colors.white,
            alignment=1,
        ),
        "section": ParagraphStyle(
            "ZebraSection",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=13,
            leading=16,
            textColor=PRIMARY,
            spaceBefore=12,
            spaceAfter=6,
        ),
        "body": ParagraphStyle(
            "ZebraBody",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13,
            textColor=TEXT,
            spaceAfter=6,
        ),
        "small": ParagraphStyle(
            "ZebraSmall",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=12,
            textColor=MUTED,
        ),
        "footer": ParagraphStyle(
            "ZebraFooter",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=7.5,
            leading=10,
            textColor=MUTED,
            alignment=1,
        ),
    }


def sample_banner(styles):
    return Table(
        [[Paragraph("SAMPLE REPORT - FAKE PATIENT DATA - FOR PREVIEW ONLY", styles["sample"])]],
        colWidths=[7.0 * inch],
        style=TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), ACCENT),
                ("BOX", (0, 0), (-1, -1), 0, ACCENT),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ]
        ),
    )


def key_value_table(rows):
    return Table(
        rows,
        colWidths=[1.65 * inch, 1.65 * inch, 1.65 * inch, 2.05 * inch],
        style=TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), SOFT_BG),
                ("BOX", (0, 0), (-1, -1), 0.7, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("TEXTCOLOR", (0, 0), (-1, -1), TEXT),
                ("FONTNAME", (0, 0), (-1, -1), "Helvetica"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.5),
                ("LEADING", (0, 0), (-1, -1), 11),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ]
        ),
    )


def zebra_table(headers, rows, widths):
    data = [headers] + rows
    return Table(
        data,
        colWidths=widths,
        repeatRows=1,
        style=TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), PRIMARY),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, 0), 8.5),
                ("BACKGROUND", (0, 1), (-1, -1), CARD_BG),
                ("TEXTCOLOR", (0, 1), (-1, -1), TEXT),
                ("FONTNAME", (0, 1), (-1, -1), "Helvetica"),
                ("FONTSIZE", (0, 1), (-1, -1), 8.2),
                ("LEADING", (0, 1), (-1, -1), 10),
                ("BOX", (0, 0), (-1, -1), 0.7, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        ),
    )


def draw_footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    footer = (
        "Sample Zebra report. Fake patient data. Zebra does not diagnose, treat, prevent, cure, "
        "replace medical care, or interpret symptoms."
    )
    canvas.drawCentredString(letter[0] / 2, 0.38 * inch, footer)
    canvas.drawRightString(letter[0] - 0.55 * inch, 0.22 * inch, f"Page {doc.page}")
    canvas.restoreState()


def build_pdf():
    styles = paragraph_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        rightMargin=0.55 * inch,
        leftMargin=0.55 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.6 * inch,
        title="Sample Zebra Doctor Report",
        author="Zebra",
        subject="Sample doctor-ready symptom report with fake patient data",
    )

    story = [
        sample_banner(styles),
        Spacer(1, 0.14 * inch),
        Paragraph("Zebra Symptom Report", styles["title"]),
        Paragraph(
            "Sample 30-day summary for appointment preparation. This report uses fake patient data and is not medical advice.",
            styles["subtitle"],
        ),
        key_value_table(
            [
                ["Patient", "Sample Patient", "Date range", "June 25 - July 24, 2026"],
                ["Prepared for", "Upcoming specialist visit", "Generated", "July 25, 2026"],
            ]
        ),
        Spacer(1, 0.08 * inch),
        Paragraph("Snapshot", styles["section"]),
        zebra_table(
            ["Area", "Sample summary"],
            [
                ["Flares", "14 tracked flare days. Average severity 6.4/10. Highest severity 9/10."],
                ["Most tracked symptoms", "Dizziness, fatigue, brain fog, palpitations, joint pain."],
                ["Medication context", "Midodrine and beta blocker entries recorded on tracked days."],
                ["Salt and water", "Daily salt and water entries tracked beside symptoms for appointment review."],
                ["Orthostatic vitals", "Lying, sitting, and standing observations recorded in the same history."],
            ],
            [1.65 * inch, 5.35 * inch],
        ),
        Paragraph("Flare Pattern", styles["section"]),
        zebra_table(
            ["Week", "Tracked flare days", "Average severity", "Notes"],
            [
                ["Jun 25 - Jul 1", "3", "5.7/10", "Dizziness and fatigue after heat exposure."],
                ["Jul 2 - Jul 8", "4", "6.8/10", "Brain fog and palpitations noted on standing-heavy days."],
                ["Jul 9 - Jul 15", "2", "4.5/10", "Lower symptom load; hydration entries were more consistent."],
                ["Jul 16 - Jul 24", "5", "7.2/10", "Joint pain and fatigue increased after missed medication entry."],
            ],
            [1.35 * inch, 1.4 * inch, 1.35 * inch, 2.9 * inch],
        ),
        Paragraph("Orthostatic Vitals Examples", styles["section"]),
        zebra_table(
            ["Date", "Lying", "Sitting", "Standing", "Context"],
            [
                ["Jul 5", "HR 72, BP 112/70", "HR 94, BP 108/68", "HR 126, BP 104/66", "Dizziness, palpitations"],
                ["Jul 18", "HR 76, BP 110/72", "HR 101, BP 106/70", "HR 132, BP 102/68", "Brain fog, fatigue"],
            ],
            [0.75 * inch, 1.35 * inch, 1.35 * inch, 1.35 * inch, 2.2 * inch],
        ),
        Paragraph("Appointment Questions", styles["section"]),
        Paragraph(
            "1. Are the standing heart-rate changes worth reviewing further? 2. Should medication timing be discussed? "
            "3. Are salt or fluid targets still appropriate for this patient? 4. Which symptoms should be tracked before the next visit?",
            styles["body"],
        ),
        Rule(),
        Paragraph(
            "Important: This sample shows the kind of patient-entered history Zebra can organize. It is not a diagnosis, medical interpretation, treatment recommendation, or emergency tool. A qualified healthcare professional decides what the information means.",
            styles["small"],
        ),
        PageBreak(),
        sample_banner(styles),
        Spacer(1, 0.14 * inch),
        Paragraph("Additional Detail Examples", styles["title"]),
        Paragraph(
            "This second page shows how notes and context can be grouped for review. All entries below are fictional.",
            styles["subtitle"],
        ),
        Paragraph("Symptom Frequency", styles["section"]),
        zebra_table(
            ["Symptom", "Days tracked", "Typical severity", "Example context"],
            [
                ["Dizziness", "12", "Moderate to severe", "Often noted after standing, heat, or low-water days."],
                ["Fatigue", "15", "Moderate", "Often noted after poor sleep or high-activity days."],
                ["Brain fog", "9", "Mild to severe", "Often noted before appointments and after flare days."],
                ["Joint pain", "8", "Moderate", "Often noted with EDS/hEDS overlap symptoms."],
                ["Palpitations", "7", "Mild to severe", "Often noted during orthostatic check-ins."],
            ],
            [1.3 * inch, 1.1 * inch, 1.3 * inch, 3.3 * inch],
        ),
        Paragraph("Medication, Salt, Water, Triggers, and Notes", styles["section"]),
        zebra_table(
            ["Context", "Sample entries"],
            [
                ["Medication", "Morning medication tracked on 24 days. Afternoon medication missed twice."],
                ["Salt and water", "Salt and water tracked beside symptoms; no treatment advice is provided."],
                ["Triggers", "Heat, standing, missed medication, poor sleep, and illness were tagged by the sample patient."],
                ["Notes", "Short notes captured appointment questions and details the patient wanted to remember."],
            ],
            [1.45 * inch, 5.55 * inch],
        ),
        Paragraph("What This Report Is For", styles["section"]),
        Paragraph(
            "This report is designed to reduce memory work before a care conversation. It gives a patient a clearer way to review what they tracked and decide what to bring up with a clinician.",
            styles["body"],
        ),
        Paragraph("What This Report Is Not", styles["section"]),
        Paragraph(
            "This report does not diagnose POTS, EDS/hEDS, Fibromyalgia, dysautonomia, Long COVID, ME/CFS, or any other condition. It does not interpret symptoms, recommend treatment, or replace medical advice.",
            styles["body"],
        ),
    ]

    doc.build(story, onFirstPage=draw_footer, onLaterPages=draw_footer)


if __name__ == "__main__":
    build_pdf()
    print(OUTPUT)
